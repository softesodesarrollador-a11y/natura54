(() => {
  const carouselConfigs = [
    { carousel: ".building-photo", slide: ".building-slide" },
    { carousel: ".room-carousel", slide: ".room-slide" }
  ];

  function setupCarouselIndicators(carousel, slideSelector) {
    const slides = Array.from(carousel.children).filter((child) => child.matches(slideSelector));

    if (slides.length < 2 || carousel.nextElementSibling?.classList.contains("carousel-indicators")) {
      return;
    }

    const indicators = document.createElement("div");
    indicators.className = "carousel-indicators";
    indicators.setAttribute("aria-hidden", "true");

    const dots = slides.map((_, index) => {
      const dot = document.createElement("span");
      dot.className = "carousel-indicator";
      dot.classList.toggle("is-active", index === 0);
      indicators.append(dot);
      return dot;
    });

    carousel.insertAdjacentElement("afterend", indicators);

    let activeIndex = 0;
    let frameId = 0;

    const updateActiveIndicator = () => {
      frameId = 0;
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

      if (nearestIndex === activeIndex) return;

      dots[activeIndex].classList.remove("is-active");
      dots[nearestIndex].classList.add("is-active");
      activeIndex = nearestIndex;
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = requestAnimationFrame(updateActiveIndicator);
    };

    carousel.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    updateActiveIndicator();
  }

  carouselConfigs.forEach(({ carousel, slide }) => {
    document.querySelectorAll(carousel).forEach((element) => {
      setupCarouselIndicators(element, slide);
    });
  });
})();
