(() => {
  const carouselConfigs = [
    { carousel: ".building-photo", slide: ".building-slide" },
    { carousel: ".room-carousel", slide: ".room-slide" }
  ];

  let viewer;
  let viewerTrack;
  let viewerDots;
  let viewerPrevious;
  let viewerNext;
  let viewerClose;
  let activeGallery = null;
  let viewerIndex = 0;
  let viewerFrameId = 0;
  let previousBodyOverflow = "";
  let lastFocusedElement = null;

  function nearestSlideIndex(carousel, slides) {
    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(carouselCenter - slideCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }

  function centeredScrollLeft(container, item) {
    return item.offsetLeft - (container.clientWidth - item.offsetWidth) / 2;
  }

  function scrollOriginalGallery(index, behavior = "smooth") {
    if (!activeGallery) return;
    const slide = activeGallery.slides[index];
    activeGallery.carousel.scrollTo({
      left: centeredScrollLeft(activeGallery.carousel, slide),
      behavior
    });
  }

  function updateViewer(index) {
    if (!activeGallery) return;
    viewerIndex = Math.max(0, Math.min(index, activeGallery.slides.length - 1));

    Array.from(viewerDots.children).forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === viewerIndex);
    });

    viewerPrevious.disabled = viewerIndex === 0;
    viewerNext.disabled = viewerIndex === activeGallery.slides.length - 1;
  }

  function scheduleViewerUpdate() {
    if (viewerFrameId) return;
    viewerFrameId = requestAnimationFrame(() => {
      viewerFrameId = 0;
      const slides = Array.from(viewerTrack.children);
      updateViewer(nearestSlideIndex(viewerTrack, slides));
    });
  }

  function showViewerSlide(index, behavior = "smooth") {
    const slide = viewerTrack.children[index];
    if (!slide) return;
    viewerTrack.scrollTo({ left: centeredScrollLeft(viewerTrack, slide), behavior });
    updateViewer(index);
  }

  function closeViewer() {
    if (!activeGallery) return;
    scrollOriginalGallery(viewerIndex);
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = previousBodyOverflow;
    activeGallery = null;
    lastFocusedElement?.focus({ preventScroll: true });
  }

  function openViewer(gallery, index, opener) {
    activeGallery = gallery;
    viewerIndex = index;
    lastFocusedElement = opener;
    viewerTrack.replaceChildren();
    viewerDots.replaceChildren();

    gallery.slides.forEach((slide, slideIndex) => {
      const sourceImage = slide.querySelector("img");
      if (!sourceImage) return;

      const viewerSlide = document.createElement("figure");
      viewerSlide.className = "photo-viewer__slide";
      const image = document.createElement("img");
      image.src = sourceImage.currentSrc || sourceImage.src;
      image.alt = sourceImage.alt;
      image.draggable = false;
      viewerSlide.append(image);
      viewerTrack.append(viewerSlide);

      const dot = document.createElement("span");
      dot.className = "photo-viewer__indicator";
      dot.classList.toggle("is-active", slideIndex === index);
      viewerDots.append(dot);
    });

    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    updateViewer(index);
    requestAnimationFrame(() => {
      showViewerSlide(index, "auto");
      viewerClose.focus({ preventScroll: true });
    });
  }

  function createViewer() {
    viewer = document.createElement("div");
    viewer.className = "photo-viewer";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-label", "Visor de fotografías");
    viewer.setAttribute("aria-hidden", "true");
    viewer.innerHTML = `
      <button class="photo-viewer__close" type="button" aria-label="Cerrar visor">×</button>
      <button class="photo-viewer__arrow photo-viewer__arrow--previous" type="button" aria-label="Foto anterior">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
      </button>
      <div class="photo-viewer__track"></div>
      <button class="photo-viewer__arrow photo-viewer__arrow--next" type="button" aria-label="Foto siguiente">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
      <div class="photo-viewer__indicators" aria-hidden="true"></div>
    `;
    document.body.append(viewer);

    viewerTrack = viewer.querySelector(".photo-viewer__track");
    viewerDots = viewer.querySelector(".photo-viewer__indicators");
    viewerPrevious = viewer.querySelector(".photo-viewer__arrow--previous");
    viewerNext = viewer.querySelector(".photo-viewer__arrow--next");
    viewerClose = viewer.querySelector(".photo-viewer__close");

    viewerClose.addEventListener("click", closeViewer);
    viewerPrevious.addEventListener("click", () => showViewerSlide(viewerIndex - 1));
    viewerNext.addEventListener("click", () => showViewerSlide(viewerIndex + 1));
    viewerTrack.addEventListener("scroll", scheduleViewerUpdate, { passive: true });
    viewer.addEventListener("click", (event) => {
      if (event.target === viewer) closeViewer();
    });

    document.addEventListener("keydown", (event) => {
      if (!activeGallery) return;
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showViewerSlide(viewerIndex - 1);
      if (event.key === "ArrowRight") showViewerSlide(viewerIndex + 1);
    });

    let dragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    viewerTrack.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") return;
      dragging = true;
      dragStartX = event.clientX;
      dragStartScrollLeft = viewerTrack.scrollLeft;
      viewerTrack.classList.add("is-dragging");
      viewerTrack.setPointerCapture(event.pointerId);
    });

    viewerTrack.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      viewerTrack.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
    });

    const stopDragging = () => {
      dragging = false;
      viewerTrack.classList.remove("is-dragging");
    };
    viewerTrack.addEventListener("pointerup", stopDragging);
    viewerTrack.addEventListener("pointercancel", stopDragging);
  }

  function setupCarousel(carousel, slideSelector) {
    const slides = Array.from(carousel.children).filter((child) => child.matches(slideSelector));
    if (!slides.length) return;

    let pointerStartX = 0;
    let pointerStartY = 0;
    let suppressOpenUntil = 0;

    carousel.addEventListener("pointerdown", (event) => {
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
    }, { passive: true });

    carousel.addEventListener("pointermove", (event) => {
      const movedHorizontally = Math.abs(event.clientX - pointerStartX) > 8;
      const movedVertically = Math.abs(event.clientY - pointerStartY) > 8;
      if (movedHorizontally || movedVertically) suppressOpenUntil = performance.now() + 250;
    }, { passive: true });

    const indicatorsAlreadyExist = carousel.nextElementSibling?.classList.contains("carousel-indicators");
    let dots = [];

    if (slides.length > 1 && !indicatorsAlreadyExist) {
      const indicators = document.createElement("div");
      indicators.className = "carousel-indicators";
      indicators.setAttribute("aria-hidden", "true");
      dots = slides.map((_, index) => {
        const dot = document.createElement("span");
        dot.className = "carousel-indicator";
        dot.classList.toggle("is-active", index === 0);
        indicators.append(dot);
        return dot;
      });
      carousel.insertAdjacentElement("afterend", indicators);
    } else if (indicatorsAlreadyExist) {
      dots = Array.from(carousel.nextElementSibling.children);
    }

    let activeIndex = 0;
    let frameId = 0;
    const updateActiveIndicator = () => {
      frameId = 0;
      const nearestIndex = nearestSlideIndex(carousel, slides);
      if (nearestIndex === activeIndex) return;
      dots[activeIndex]?.classList.remove("is-active");
      dots[nearestIndex]?.classList.add("is-active");
      activeIndex = nearestIndex;
    };
    const scheduleUpdate = () => {
      if (!frameId) frameId = requestAnimationFrame(updateActiveIndicator);
    };

    const gallery = { carousel, slides };
    slides.forEach((slide, index) => {
      if (!slide.querySelector("img")) return;
      slide.classList.add("is-expandable");
      slide.tabIndex = 0;
      slide.setAttribute("role", "button");
      slide.setAttribute("aria-label", `${slide.querySelector("img").alt}. Ampliar imagen`);

      slide.addEventListener("click", () => {
        if (performance.now() < suppressOpenUntil) return;
        openViewer(gallery, index, slide);
      });
      slide.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openViewer(gallery, index, slide);
        }
      });
    });

    carousel.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    updateActiveIndicator();
  }

  createViewer();
  carouselConfigs.forEach(({ carousel, slide }) => {
    document.querySelectorAll(carousel).forEach((element) => setupCarousel(element, slide));
  });
})();
