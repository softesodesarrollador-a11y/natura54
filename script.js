const translations = {
  es: {
    topLabel: "Guía para huéspedes",
    meet: "Conoce a Natura 54",
    welcomeTitle: "Bienvenido a Natura 54 Experience 🌿",
    welcomeOne:
      "Tu estadía comienza aquí. Descubre Natura 54, conoce los mejores lugares de Ibagué, encuentra restaurantes, cafés, centros comerciales, planes turísticos y experiencias cerca de ti.",
    welcomeTwo:
      "Hemos creado esta guía para que disfrutes la ciudad de una forma fácil, cómoda y especial.",
    welcomeThree: "Explora, descubre y vive Ibagué. Tu experiencia en Natura 54 empieza ahora.",
    addressLabel: "Dirección",
    route: "Cómo llegar",
    whatToday: "¿Qué quieres hacer hoy?",
    gastronomy: "Gastronomía",
    shopping: "Comprar",
    tourism: "Turismo",
    map: "Ver en Google Maps",
    gastronomyIntro: "Restaurantes, bebidas y planes cercanos a Natura 54.",
    shoppingIntro: "Centros comerciales, mercado y compras útiles durante tu estadía.",
    tourismIntro: "Planes para descubrir Ibagué entre naturaleza, cultura y aventura.",
    idealFor: "Ideal para",
    fromNatura: "Desde Natura 54",
    recommendation: "Recomendación Natura",
    whatToDo: "Qué hacer",
    experienceLevel: "Nivel de experiencia",
    phone: "Tel."
  },
  en: {
    topLabel: "Guest guide",
    meet: "Meet Natura 54",
    welcomeTitle: "Welcome to Natura 54 Experience 🌿",
    welcomeOne:
      "Your stay starts here. Discover Natura 54, explore the best places in Ibagué, and find restaurants, cafés, shopping centers, tourist plans and nearby experiences.",
    welcomeTwo:
      "We created this guide so you can enjoy the city in an easy, comfortable and special way.",
    welcomeThree: "Explore, discover and live Ibagué. Your Natura 54 experience starts now.",
    addressLabel: "Address",
    route: "Get directions",
    whatToday: "What would you like to do today?",
    gastronomy: "Food",
    shopping: "Shopping",
    tourism: "Tourism",
    map: "Open in Google Maps",
    gastronomyIntro: "Restaurants, drinks and nearby plans around Natura 54.",
    shoppingIntro: "Shopping centers, groceries and useful stops during your stay.",
    tourismIntro: "Plans to discover Ibagué through nature, culture and adventure.",
    idealFor: "Ideal for",
    fromNatura: "From Natura 54",
    recommendation: "Natura recommendation",
    whatToDo: "What to do",
    experienceLevel: "Experience level",
    phone: "Phone"
  }
};

const categories = {
  gastronomy: {
    icon: "🍽️",
    titleKey: "gastronomy",
    introKey: "gastronomyIntro",
    places: [
      {
        icon: "🐟",
        name: "Somos Pacífico",
        address: "Calle 54 #7B-05",
        es: "Está sobre la misma Calle 54 de Natura 54, por lo que es una de las recomendaciones más naturales para el huésped. Restaurante con propuesta gastronómica enfocada en sabores del Pacífico.",
        en: "Located on the same Calle 54 as Natura 54, it is one of the most natural guest recommendations. A restaurant focused on Pacific coast flavors."
      },
      {
        icon: "🫓",
        name: "Toppings Arepas & Drinks",
        address: "Edificio Maros, Calle 56 #7C-05",
        phone: "316 494 8423",
        es: "Una opción informal y cercana para disfrutar arepas, comida rápida y bebidas, perfecta para una comida casual o algo en la noche.",
        en: "A casual nearby option for arepas, quick food and drinks, perfect for an easy meal or a night bite."
      },
      {
        icon: "🍸",
        name: "El Patrón Liquor Store",
        address: "Calle 53 #7B-55",
        es: "Excelente para recomendar cuando el huésped quiera tomar algo, compartir y disfrutar del ambiente nocturno sin alejarse demasiado de Natura 54.",
        en: "Great when guests want to have a drink, share and enjoy the nightlife without going far from Natura 54."
      },
      {
        icon: "🍺",
        name: "Jardín Cervecero Ibabeer",
        address: "Calle 53 #7C-05",
        phone: "310 446 6891",
        es: "Cervecería cercana con ambiente relajado para cervezas, comida y una salida entre amigos.",
        en: "Nearby beer garden with a relaxed atmosphere for beers, food and a friendly night out."
      },
      {
        icon: "🍽️",
        name: "Empireo Gastrobar",
        address: "Carrera 7C #51-06",
        phone: "313 752 2523",
        es: "Una alternativa para quien busca algo más tipo restaurante + gastrobar, con comida, bebidas y coctelería.",
        en: "A good option for a restaurant and gastrobar experience with food, drinks and cocktails."
      }
    ]
  },
  shopping: {
    icon: "🛍️",
    titleKey: "shopping",
    introKey: "shoppingIntro",
    places: [
      {
        icon: "🛍️",
        name: "Acqua Power Center",
        address: "Calle 60 # 8-37",
        es: "Ideal para tiendas, restaurantes, cafés, entretenimiento y compras variadas. Muy conveniente por su cercanía a Natura 54.",
        en: "Ideal for stores, restaurants, cafés, entertainment and varied shopping. Very convenient thanks to its proximity to Natura 54."
      },
      {
        icon: "🛒",
        name: "Centro Comercial Multicentro",
        address: "Carrera 5 # 60-123",
        es: "Ideal para moda, servicios, restaurantes, supermercado y compras del día a día. Una de las principales opciones comerciales del sector.",
        en: "Ideal for fashion, services, restaurants, supermarket and everyday shopping. One of the main commercial options in the area."
      },
      {
        icon: "🛍️",
        name: "Centro Comercial La Estación",
        address: "Calle 60 # 12-224",
        phone: "+57 608 270 7536",
        es: "Ideal para compras, moda, restaurantes, entretenimiento y pasar una tarde completa.",
        en: "Ideal for shopping, fashion, restaurants, entertainment and spending a full afternoon."
      },
      {
        icon: "🛒",
        name: "Mercacentro No. 4 Av. Guabinal",
        address: "Av. Guabinal # 51-53",
        phone: "+57 608 515 6156",
        es: "Ideal para mercado, bebidas, snacks, productos de aseo y todo lo necesario para abastecerse durante la estadía.",
        en: "Ideal for groceries, drinks, snacks, toiletries and everything needed during the stay."
      },
      {
        icon: "🛍️",
        name: "Paseo Comercial Arkacentro",
        address: "Carrera 5 # 64A-15",
        es: "Ideal para compras rápidas, locales comerciales, servicios y complementar una visita a la zona de los centros comerciales.",
        en: "Ideal for quick shopping, local stores, services and complementing a visit to the shopping district."
      }
    ]
  },
  tourism: {
    icon: "🌄",
    titleKey: "tourism",
    introKey: "tourismIntro",
    places: [
      {
        icon: "🌄",
        name: "Cañón del Combeima",
        address: "Cañón del Combeima, Ibagué",
        rating: "4.7",
        phone: "316 5323648",
        es: "Uno de los planes imprescindibles de Ibagué. Es un corredor natural hacia Juntas y las estribaciones del Nevado del Tolima, con montañas, río, cascadas, miradores y oferta gastronómica.",
        en: "One of Ibagué's essential plans. A natural corridor toward Juntas and the Nevado del Tolima foothills, with mountains, river, waterfalls, viewpoints and local food.",
        details: {
          es: ["Desde Natura 54: aprox. 30-45 min hacia Juntas", "Ideal para: naturaleza, fotografía, caminatas y pasar medio día o el día completo.", "Recomendación Natura: subir temprano, recorrer Juntas, visitar un mirador y almorzar comida típica de la zona."],
          en: ["From Natura 54: approx. 30-45 min toward Juntas", "Ideal for: nature, photography, hiking and spending half a day or the full day.", "Natura recommendation: go early, explore Juntas, visit a viewpoint and have a typical local lunch."]
        }
      },
      {
        icon: "🌿",
        name: "Jardín Botánico San Jorge",
        address: "Jardín Botánico San Jorge, Ibagué",
        rating: "4.6",
        phone: "313 3783055",
        es: "Reserva natural de alrededor de 60 hectáreas ubicada en los cerros de Ibagué, con senderos de bosque subandino y colecciones de orquídeas, bromelias, palmas, heliconias y plantas medicinales.",
        en: "A natural reserve of around 60 hectares in Ibagué's hills, with sub-Andean forest trails and collections of orchids, bromeliads, palms, heliconias and medicinal plants.",
        details: {
          es: ["Desde Natura 54: aprox. 15-25 min", "Ideal para: parejas, familias, fotografía y ecoturismo.", "Qué hacer: senderismo, observar flora y fauna, visitar miradores y desconectarse del movimiento de la ciudad."],
          en: ["From Natura 54: approx. 15-25 min", "Ideal for: couples, families, photography and ecotourism.", "What to do: hiking, observing flora and fauna, visiting viewpoints and disconnecting from the city rhythm."]
        }
      },
      {
        icon: "🏛️",
        name: "Museo Panóptico de Ibagué",
        address: "Museo Panóptico de Ibagué",
        rating: "4.4",
        es: "El antiguo complejo penitenciario fue restaurado y convertido en museo y espacio cultural, conservando su característica arquitectura en forma de cruz.",
        en: "The former prison complex was restored and transformed into a museum and cultural space, preserving its distinctive cross-shaped architecture.",
        details: {
          es: ["Desde Natura 54: aprox. 15-20 min", "Ideal para: cultura, arquitectura, historia y fotografía.", "Plan recomendado: combinarlo con un recorrido por el centro tradicional, Plaza de Bolívar y otros lugares históricos."],
          en: ["From Natura 54: approx. 15-20 min", "Ideal for: culture, architecture, history and photography.", "Recommended plan: combine it with the traditional downtown area, Plaza de Bolívar and other historic places."]
        }
      },
      {
        icon: "🥾",
        name: "Parque Ecológico La Martinica",
        address: "Parque Ecológico La Martinica, Ibagué",
        rating: "4.4",
        phone: "320 3000043",
        es: "Un plan para quienes quieren montaña sin alejarse demasiado de Ibagué, con senderismo, recorridos ecológicos, miradores naturales y sectores de cascadas y vegetación.",
        en: "A plan for guests who want mountains without going too far from Ibagué, with hiking, ecological routes, natural viewpoints, waterfalls and vegetation.",
        details: {
          es: ["Desde Natura 54: aprox. 20-30 min hasta el sector de acceso", "Ideal para: senderistas, amigos, parejas y viajeros aventureros.", "Recomendación: llevar calzado adecuado, hidratación y preferiblemente realizar los recorridos durante la mañana."],
          en: ["From Natura 54: approx. 20-30 min to the access area", "Ideal for: hikers, friends, couples and adventurous travelers.", "Recommendation: wear proper shoes, bring water and preferably go in the morning."]
        }
      },
      {
        icon: "🪂",
        name: "Parapente en Ibagué",
        address: "Parapente en Ibagué",
        rating: "4.8",
        phone: "315 6000930",
        es: "Una experiencia diferente para realizar vuelos en parapente con piloto, contemplando desde el aire Ibagué y el paisaje montañoso que rodea la ciudad.",
        en: "A different experience: paragliding flights with a pilot while enjoying Ibagué and the surrounding mountain landscape from the air.",
        details: {
          es: ["Desde Natura 54: depende del punto de encuentro y despegue; generalmente dentro del área rural cercana a Ibagué.", "Ideal para: aventura, parejas y viajeros que buscan una experiencia memorable.", "Nivel de experiencia: atrévete a vivir algo diferente."],
          en: ["From Natura 54: depends on the meeting and takeoff point; usually in the nearby rural area.", "Ideal for: adventure, couples and travelers looking for a memorable experience.", "Experience level: dare to live something different."]
        }
      }
    ]
  }
};

let currentLanguage = "es";
let currentCategory = "";

const languageScreen = document.querySelector("#languageScreen");
const guideScreen = document.querySelector("#guideScreen");
const choiceGrid = document.querySelector("#choiceGrid");
const recommendations = document.querySelector("#recommendations");
const languageToggle = document.querySelector("#languageToggle");

function mapUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address} Ibagué Tolima`)}`;
}

function translatePage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[currentLanguage][key];
  });
  languageToggle.textContent = currentLanguage.toUpperCase();
  renderRecommendations();
}

function showGuide(language) {
  currentLanguage = language;
  languageScreen.classList.remove("is-active");
  guideScreen.classList.add("is-active");
  choiceGrid.classList.remove("is-open");
  currentCategory = "";
  document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("is-selected"));
  translatePage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderRecommendations() {
  if (!currentCategory) {
    recommendations.innerHTML = "";
    return;
  }

  const category = categories[currentCategory];
  const copy = translations[currentLanguage];
  const cards = category.places
    .map((place) => {
      const meta = [
        place.address ? `📍 ${place.address}` : "",
        place.rating ? `⭐ ${place.rating}` : "",
        place.phone ? `☎️ ${copy.phone} ${place.phone}` : ""
      ]
        .filter(Boolean)
        .map((item) => `<span>${item}</span>`)
        .join("");

      const details = place.details
        ? `<ul class="details">${place.details[currentLanguage].map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      return `
        <article class="place-card">
          <a class="place-image ${currentCategory}" href="${mapUrl(place)}" target="_blank" rel="noreferrer" aria-label="${copy.map}: ${place.name}">
            <span aria-hidden="true">${place.icon}</span>
          </a>
          <div class="place-body">
            <h3>${place.name}</h3>
            <div class="meta">${meta}</div>
            <p class="description">${place[currentLanguage]}</p>
            ${details}
            <a class="map-link" href="${mapUrl(place)}" target="_blank" rel="noreferrer">${copy.map}</a>
          </div>
        </article>
      `;
    })
    .join("");

  recommendations.innerHTML = `
    <div class="section-title">
      <h2>${category.icon} ${copy[category.titleKey]}</h2>
      <p>${copy[category.introKey]}</p>
    </div>
    ${cards}
  `;
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => showGuide(button.dataset.language));
});

document.querySelector("#backToLanguage").addEventListener("click", () => {
  guideScreen.classList.remove("is-active");
  languageScreen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  translatePage();
});

document.querySelector("#openChoices").addEventListener("click", () => {
  choiceGrid.classList.toggle("is-open");
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    renderRecommendations();
    recommendations.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderRecommendations();
