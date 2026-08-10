const translations = {
  es: {
    topLabel: "Gu\u00eda para hu\u00e9spedes",
    meet: "Conoce a Natura 54",
    welcomeTitle: "Bienvenido a Natura 54 Experience \u{1F33F}",
    welcomeOne:
      "Tu estad\u00eda comienza aqu\u00ed. Descubre Natura 54, conoce los mejores lugares de Ibagu\u00e9, encuentra restaurantes, caf\u00e9s, centros comerciales, planes tur\u00edsticos y experiencias cerca de ti.",
    welcomeTwo:
      "Hemos creado esta gu\u00eda para que disfrutes la ciudad de una forma f\u00e1cil, c\u00f3moda y especial.",
    welcomeThree: "Explora, descubre y vive Ibagu\u00e9. Tu experiencia en Natura 54 empieza ahora.",
    addressLabel: "Direcci\u00f3n",
    route: "C\u00f3mo llegar",
    whatToday: "\u00bfQu\u00e9 quieres hacer hoy?",
    gastronomy: "Gastronom\u00eda",
    shopping: "Comprar",
    tourism: "Turismo",
    sports: "Deportes",
    map: "Ver en Google Maps",
    gastronomyIntro: "Restaurantes, caf\u00e9s, bebidas y sabores recomendados en Ibagu\u00e9.",
    shoppingIntro: "Compras, supermercados, droguer\u00edas y servicios \u00fatiles durante tu estad\u00eda.",
    tourismIntro: "Planes para descubrir Ibagu\u00e9 entre naturaleza, cultura y aventura.",
    sportsIntro: "Escenarios deportivos, canchas y espacios para moverte en la ciudad.",
    phone: "Tel."
  },
  en: {
    topLabel: "Guest guide",
    meet: "Meet Natura 54",
    welcomeTitle: "Welcome to Natura 54 Experience \u{1F33F}",
    welcomeOne:
      "Your stay starts here. Discover Natura 54, explore the best places in Ibagu\u00e9, and find restaurants, caf\u00e9s, shopping centers, tourist plans and nearby experiences.",
    welcomeTwo:
      "We created this guide so you can enjoy the city in an easy, comfortable and special way.",
    welcomeThree: "Explore, discover and live Ibagu\u00e9. Your Natura 54 experience starts now.",
    addressLabel: "Address",
    route: "Get directions",
    whatToday: "What would you like to do today?",
    gastronomy: "Food",
    shopping: "Shopping",
    tourism: "Tourism",
    sports: "Sports",
    map: "Open in Google Maps",
    gastronomyIntro: "Restaurants, caf\u00e9s, drinks and recommended flavors in Ibagu\u00e9.",
    shoppingIntro: "Shopping, groceries, pharmacies and useful services during your stay.",
    tourismIntro: "Plans to discover Ibagu\u00e9 through nature, culture and adventure.",
    sportsIntro: "Sports venues, soccer fields and places to stay active in the city.",
    phone: "Phone"
  },
  fr: {
    topLabel: "Guide des h\u00f4tes",
    meet: "D\u00e9couvrez Natura 54",
    welcomeTitle: "Bienvenue \u00e0 Natura 54 Experience \u{1F33F}",
    welcomeOne:
      "Votre s\u00e9jour commence ici. D\u00e9couvrez Natura 54, les meilleurs lieux d'Ibagu\u00e9, ainsi que des restaurants, caf\u00e9s, centres commerciaux, plans touristiques et exp\u00e9riences proches de vous.",
    welcomeTwo:
      "Nous avons cr\u00e9\u00e9 ce guide pour que vous profitiez de la ville de mani\u00e8re simple, confortable et sp\u00e9ciale.",
    welcomeThree: "Explorez, d\u00e9couvrez et vivez Ibagu\u00e9. Votre exp\u00e9rience \u00e0 Natura 54 commence maintenant.",
    addressLabel: "Adresse",
    route: "Itin\u00e9raire",
    whatToday: "Que voulez-vous faire aujourd'hui ?",
    gastronomy: "Gastronomie",
    shopping: "Shopping",
    tourism: "Tourisme",
    sports: "Sports",
    map: "Ouvrir dans Google Maps",
    gastronomyIntro: "Restaurants, caf\u00e9s, boissons et saveurs recommand\u00e9es \u00e0 Ibagu\u00e9.",
    shoppingIntro: "Achats, supermarch\u00e9s, pharmacies et services utiles pendant votre s\u00e9jour.",
    tourismIntro: "Des plans pour d\u00e9couvrir Ibagu\u00e9 entre nature, culture et aventure.",
    sportsIntro: "Sites sportifs, terrains et espaces pour rester actif en ville.",
    phone: "T\u00e9l."
  }
};

const categories = {
  gastronomy: {
    icon: "\u{1F374}",
    titleKey: "gastronomy",
    introKey: "gastronomyIntro",
    places: [
      {
        icon: "\u2615",
        name: "Annetts Coffee & Bakery",
        address: "Calle 54 #7B-48, Rinc\u00f3n de Piedra Pintada",
        es: "Caf\u00e9 y panader\u00eda ubicado en el primer piso del mismo Edificio Natura 54. Ideal para caf\u00e9, desayunos, postres y panader\u00eda.",
        en: "Coffee shop and bakery on the first floor of the Natura 54 building. Ideal for coffee, breakfast, desserts and bakery items."
      },
      {
        icon: "\u{1F41F}",
        name: "Somos Pac\u00edfico",
        address: "Calle 54 #7B-05",
        es: "Est\u00e1 sobre la misma Calle 54 de Natura 54, por lo que es una de las recomendaciones m\u00e1s naturales para el hu\u00e9sped. Restaurante con propuesta gastron\u00f3mica enfocada en sabores del Pac\u00edfico.",
        en: "Located on the same Calle 54 as Natura 54, it is one of the most natural guest recommendations. A restaurant focused on Pacific coast flavors."
      },
      {
        icon: "\u{1FAD3}",
        name: "Toppings Arepas & Drinks",
        address: "Edificio Maros, Calle 56 #7C-05",
        phone: "316 494 8423",
        es: "Una opci\u00f3n informal y cercana para disfrutar arepas, comida r\u00e1pida y bebidas, perfecta para una comida casual o algo en la noche.",
        en: "A casual nearby option for arepas, quick food and drinks, perfect for an easy meal or a night bite."
      },
      {
        icon: "\u{1F377}",
        name: "Don Pedro T\u00edpico Colombiano - Calle 60",
        address: "Avenida 60 #13A-33",
        es: "Restaurante de comida t\u00edpica colombiana, carnes y parrilla.",
        en: "Restaurant serving traditional Colombian food, meats and grilled dishes."
      },
      {
        icon: "\u{1F37D}\uFE0F",
        name: "Salvador y Milagros",
        address: "Avenida 60 #13A-33, sector Vivero 60 / Arkam\u00f3nica",
        es: "Restaurante de cocina colombiana, parrilla y propuestas contempor\u00e1neas; est\u00e1 ubicado junto a Don Pedro.",
        en: "Colombian cuisine, grill and contemporary dishes; located next to Don Pedro."
      },
      {
        icon: "\u2615",
        name: "9K Coffee Club & Food / 9K Cocina Gourmet",
        address: "Kil\u00f3metro 9, v\u00eda al Ca\u00f1\u00f3n del Combeima, sector Puerto Per\u00fa",
        es: "Restaurante, caf\u00e9 y bar campestre en la ruta hacia el Ca\u00f1\u00f3n del Combeima.",
        en: "Countryside restaurant, caf\u00e9 and bar on the route to the Combeima Canyon."
      },
      {
        icon: "\u{1F372}",
        name: "Tamales Don Floro",
        address: "Calle 34 #4A-19",
        es: "Especializado en tamal tolimense y gastronom\u00eda tradicional.",
        en: "Specialized in Tolima-style tamales and traditional cuisine."
      },
      {
        icon: "\u{1F372}",
        name: "Tamal y Lechona Linda - Plaza de la 28",
        address: "Interior de la Plaza de Mercado La 28, Carrera 4H entre calles 28 y 29",
        phone: "321 394 0466",
        es: "Tamales, lechona y comida t\u00edpica tolimense dentro de la Plaza de Mercado La 28.",
        en: "Tamales, lechona and typical Tolima food inside Plaza de Mercado La 28."
      },
      {
        icon: "\u{1F414}",
        name: "Fog\u00f3n del Pollo - Jord\u00e1n",
        address: "Avenida Guabinal con Calle 65, Manzana G Casa 1, Jord\u00e1n 9 etapa",
        phone: "310 674 7609",
        es: "Pollo asado y comidas. Recomendamos confirmar la direcci\u00f3n llamando antes de visitarlo.",
        en: "Roasted chicken and meals. We recommend confirming the address by phone before visiting."
      },
      {
        icon: "\u{1F378}",
        name: "El Patr\u00f3n Liquor Store",
        address: "Calle 53 #7B-55",
        es: "Excelente para recomendar cuando el hu\u00e9sped quiera tomar algo, compartir y disfrutar del ambiente nocturno sin alejarse demasiado de Natura 54.",
        en: "Great when guests want to have a drink, share and enjoy the nightlife without going far from Natura 54."
      },
      {
        icon: "\u{1F37D}\uFE0F",
        name: "Empireo Gastrobar",
        address: "Carrera 7C #51-06",
        phone: "313 752 2523",
        es: "Una alternativa para quien busca algo m\u00e1s tipo restaurante + gastrobar, con comida, bebidas y cocteler\u00eda.",
        en: "A good option for a restaurant and gastrobar experience with food, drinks and cocktails."
      }
    ]
  },
  shopping: {
    icon: "\u{1F6CD}\uFE0F",
    titleKey: "shopping",
    introKey: "shoppingIntro",
    places: [
      {
        icon: "\u{1F6CD}\uFE0F",
        name: "Acqua Power Center",
        address: "Calle 60 # 8-37",
        es: "Ideal para tiendas, restaurantes, caf\u00e9s, entretenimiento y compras variadas. Muy conveniente por su cercan\u00eda a Natura 54.",
        en: "Ideal for stores, restaurants, caf\u00e9s, entertainment and varied shopping. Very convenient thanks to its proximity to Natura 54."
      },
      {
        icon: "\u{1F6D2}",
        name: "Surtiplaza - Acqua",
        address: "Centro Comercial Acqua Power Center, Carrera 9 #57-15",
        es: "Supermercado para mercado, bebidas, productos de aseo y art\u00edculos de uso cotidiano.",
        en: "Supermarket for groceries, drinks, toiletries and everyday essentials."
      },
      {
        icon: "\u{1F6D2}",
        name: "Centro Comercial Multicentro",
        address: "Carrera 5 # 60-123",
        es: "Ideal para moda, servicios, restaurantes, supermercado y compras del d\u00eda a d\u00eda. Una de las principales opciones comerciales del sector.",
        en: "Ideal for fashion, services, restaurants, supermarket and everyday shopping. One of the main commercial options in the area."
      },
      {
        icon: "\u{1F6CD}\uFE0F",
        name: "Centro Comercial La Estaci\u00f3n",
        address: "Calle 60 # 12-224",
        phone: "+57 608 270 7536",
        es: "Ideal para compras, moda, restaurantes, entretenimiento y pasar una tarde completa.",
        en: "Ideal for shopping, fashion, restaurants, entertainment and spending a full afternoon."
      },
      {
        icon: "\u{1F6D2}",
        name: "Mercacentro No. 4 Av. Guabinal",
        address: "Av. Guabinal # 51-53",
        phone: "+57 608 515 6156",
        es: "Ideal para mercado, bebidas, snacks, productos de aseo y todo lo necesario para abastecerse durante la estad\u00eda.",
        en: "Ideal for groceries, drinks, snacks, toiletries and everything needed during the stay."
      },
      {
        icon: "\u{1F6CD}\uFE0F",
        name: "Paseo Comercial Arkacentro",
        address: "Carrera 5 # 64A-15",
        es: "Ideal para compras r\u00e1pidas, locales comerciales, servicios y complementar una visita a la zona de los centros comerciales.",
        en: "Ideal for quick shopping, local stores, services and complementing a visit to the shopping district."
      },
      {
        icon: "\u{1F6D2}",
        name: "Tienda D1 Distrito 60",
        address: "Calle 60 No. 26, sector Prados del Norte",
        es: "Supermercado de descuento para compras r\u00e1pidas y productos b\u00e1sicos.",
        en: "Discount supermarket for quick shopping and basic products."
      },
      {
        icon: "\u{1F48A}",
        name: "Droguer\u00eda La Rebaja Plus - La 60",
        address: "Carrera 6 #59-29",
        es: "Droguer\u00eda y minimercado cercana a la Calle 60.",
        en: "Pharmacy and small market near Calle 60."
      },
      {
        icon: "\u{1F956}",
        name: "Panader\u00eda Morata",
        address: "Sector Carrera 8 con Calle 51, barrio Calarc\u00e1, detr\u00e1s de Mercacentro #4",
        es: "Panader\u00eda tradicional ubicada detr\u00e1s de Mercacentro #4.",
        en: "Traditional bakery located behind Mercacentro #4."
      },
      {
        icon: "\u26FD",
        name: "Estaci\u00f3n de Servicio Terpel Guabinal",
        address: "Avenida Guabinal con Calle 60, esquina",
        es: "Combustible y servicios para veh\u00edculos.",
        en: "Fuel and vehicle services."
      },
      {
        icon: "\u26FD",
        name: "Estaci\u00f3n de Servicio Texaco - Piedra Pintada",
        address: "Avenida Guabinal #64-66",
        es: "Estaci\u00f3n de combustible cercana al sector de Natura 54.",
        en: "Gas station near the Natura 54 area."
      }
    ]
  },
  tourism: {
    icon: "\u{1F304}",
    titleKey: "tourism",
    introKey: "tourismIntro",
    places: [
      {
        icon: "\u{1F304}",
        name: "Ca\u00f1\u00f3n del Combeima",
        address: "Ca\u00f1\u00f3n del Combeima",
        rating: "4.7",
        phone: "316 5323648",
        es: "Uno de los planes imprescindibles de Ibagu\u00e9. Es un corredor natural hacia Juntas y las estribaciones del Nevado del Tolima, con monta\u00f1as, r\u00edo, cascadas, miradores y oferta gastron\u00f3mica.",
        en: "One of Ibagu\u00e9's essential plans. A natural corridor toward Juntas and the Nevado del Tolima foothills, with mountains, river, waterfalls, viewpoints and local food.",
        details: {
          es: ["Desde Natura 54: aprox. 30-45 min hacia Juntas", "Ideal para: naturaleza, fotograf\u00eda, caminatas y pasar medio d\u00eda o el d\u00eda completo.", "Recomendaci\u00f3n Natura: subir temprano, recorrer Juntas, visitar un mirador y almorzar comida t\u00edpica de la zona."],
          en: ["From Natura 54: approx. 30-45 min toward Juntas", "Ideal for: nature, photography, hiking and spending half a day or the full day.", "Natura recommendation: go early, explore Juntas, visit a viewpoint and have a typical local lunch."]
        }
      },
      {
        icon: "\u{1F33F}",
        name: "Jard\u00edn Bot\u00e1nico San Jorge",
        address: "Jard\u00edn Bot\u00e1nico San Jorge",
        rating: "4.6",
        phone: "313 3783055",
        es: "Reserva natural de alrededor de 60 hect\u00e1reas ubicada en los cerros de Ibagu\u00e9, con senderos de bosque subandino y colecciones de orqu\u00eddeas, bromelias, palmas, heliconias y plantas medicinales.",
        en: "A natural reserve of around 60 hectares in Ibagu\u00e9's hills, with sub-Andean forest trails and collections of orchids, bromeliads, palms, heliconias and medicinal plants.",
        details: {
          es: ["Desde Natura 54: aprox. 15-25 min", "Ideal para: parejas, familias, fotograf\u00eda y ecoturismo.", "Qu\u00e9 hacer: senderismo, observar flora y fauna, visitar miradores y desconectarse del movimiento de la ciudad."],
          en: ["From Natura 54: approx. 15-25 min", "Ideal for: couples, families, photography and ecotourism.", "What to do: hiking, observing flora and fauna, visiting viewpoints and disconnecting from the city rhythm."]
        }
      },
      {
        icon: "\u{1F3DB}\uFE0F",
        name: "Museo Pan\u00f3ptico de Ibagu\u00e9",
        address: "Museo Pan\u00f3ptico de Ibagu\u00e9",
        rating: "4.4",
        es: "El antiguo complejo penitenciario fue restaurado y convertido en museo y espacio cultural, conservando su caracter\u00edstica arquitectura en forma de cruz.",
        en: "The former prison complex was restored and transformed into a museum and cultural space, preserving its distinctive cross-shaped architecture.",
        details: {
          es: ["Desde Natura 54: aprox. 15-20 min", "Ideal para: cultura, arquitectura, historia y fotograf\u00eda.", "Plan recomendado: combinarlo con un recorrido por el centro tradicional, Plaza de Bol\u00edvar y otros lugares hist\u00f3ricos."],
          en: ["From Natura 54: approx. 15-20 min", "Ideal for: culture, architecture, history and photography.", "Recommended plan: combine it with the traditional downtown area, Plaza de Bol\u00edvar and other historic places."]
        }
      },
      {
        icon: "\u{1F94E}",
        name: "Parque Ecol\u00f3gico La Martinica",
        address: "Parque Ecol\u00f3gico La Martinica",
        rating: "4.4",
        phone: "320 3000043",
        es: "Un plan para quienes quieren monta\u00f1a sin alejarse demasiado de Ibagu\u00e9, con senderismo, recorridos ecol\u00f3gicos, miradores naturales y sectores de cascadas y vegetaci\u00f3n.",
        en: "A plan for guests who want mountains without going too far from Ibagu\u00e9, with hiking, ecological routes, natural viewpoints, waterfalls and vegetation.",
        details: {
          es: ["Desde Natura 54: aprox. 20-30 min hasta el sector de acceso", "Ideal para: senderistas, amigos, parejas y viajeros aventureros.", "Recomendaci\u00f3n: llevar calzado adecuado, hidrataci\u00f3n y preferiblemente realizar los recorridos durante la ma\u00f1ana."],
          en: ["From Natura 54: approx. 20-30 min to the access area", "Ideal for: hikers, friends, couples and adventurous travelers.", "Recommendation: wear proper shoes, bring water and preferably go in the morning."]
        }
      },
      {
        icon: "\u26EA",
        name: "Catedral Inmaculada Concepci\u00f3n - Plaza de Bol\u00edvar",
        address: "Calle 10 #1-129, Plaza de Bol\u00edvar, Centro",
        es: "Catedral principal de Ibagu\u00e9 y uno de los lugares religiosos y arquitect\u00f3nicos emblem\u00e1ticos del centro hist\u00f3rico.",
        en: "Ibagu\u00e9's main cathedral and one of the religious and architectural landmarks of the historic downtown."
      },
      {
        icon: "\u{1F3A1}",
        name: "Parque Caik\u00e9",
        address: "Variante Armenia-Bogot\u00e1, Kil\u00f3metro 15, sector Buenos Aires",
        es: "Parque tem\u00e1tico y cultural con atracciones, actividades familiares y espacios recreativos.",
        en: "Theme and cultural park with attractions, family activities and recreational spaces."
      },
      {
        icon: "\u{1F3D6}\uFE0F",
        name: "Playa Hawai",
        address: "Kil\u00f3metro 22 v\u00eda Ibagu\u00e9-Girardot, Tolima",
        es: "Parque recreacional y acu\u00e1tico con piscinas, toboganes, pisciplaya y alojamiento.",
        en: "Recreational water park with pools, slides, beach-style pool and lodging."
      }
    ]
  },
  sports: {
    icon: "\u26BD",
    titleKey: "sports",
    introKey: "sportsIntro",
    places: [
      {
        icon: "\u{1F3CA}",
        name: "Complejo de Piscinas Ol\u00edmpicas - Unidad Deportiva de la Calle 42",
        address: "Calle 42 entre carreras 4 y 5",
        es: "Escenario para nataci\u00f3n y actividades acu\u00e1ticas.",
        en: "Venue for swimming and aquatic activities."
      },
      {
        icon: "\u{1F3DF}\uFE0F",
        name: "Parque Deportivo de Ibagu\u00e9",
        address: "Calle 83, Avenida Pedro Tafur / Avenida Sur Mirolindo, Kil\u00f3metro 1 v\u00eda al Aeropuerto Perales",
        es: "Gran complejo deportivo con escenarios de atletismo, f\u00fatbol, tenis, patinaje, BMX, piscinas y otras disciplinas.",
        en: "Large sports complex with venues for athletics, soccer, tennis, skating, BMX, swimming pools and other disciplines."
      },
      {
        icon: "\u26BD",
        name: "Estadio Manuel Murillo Toro",
        address: "Carrera 4 con Calle 37",
        es: "Principal estadio de f\u00fatbol de la ciudad y sede del Deportes Tolima.",
        en: "The city's main soccer stadium and home of Deportes Tolima."
      },
      {
        icon: "\u26BD",
        name: "Canchas Sint\u00e9ticas La Estaci\u00f3n",
        address: "Centro Comercial La Estaci\u00f3n, tercer piso, Local 3-21",
        es: "Canchas de f\u00fatbol sint\u00e9tico dentro del Centro Comercial La Estaci\u00f3n.",
        en: "Synthetic soccer fields inside Centro Comercial La Estaci\u00f3n."
      },
      {
        icon: "\u26BD",
        name: "Canchas Sint\u00e9ticas El Tri\u00e1ngulo",
        address: "Carrera 5 con Calle 43",
        es: "Otra alternativa cercana a Natura 54 para jugar f\u00fatbol.",
        en: "Another nearby option around Natura 54 for playing soccer."
      },
      {
        icon: "\u26BD",
        name: "The Synthetic / Canchas de la 64",
        address: "Avenida 64 con Carrera 9, Jord\u00e1n",
        es: "Canchas de f\u00fatbol en el sector Jord\u00e1n.",
        en: "Soccer fields in the Jord\u00e1n area."
      },
      {
        icon: "\u{1F3DE}\uFE0F",
        name: "Parque Centenario",
        address: "Calle 9 entre carreras 5 y 6, sector Centro",
        es: "Parque urbano y zona para caminar o hacer actividad f\u00edsica. All\u00ed tambi\u00e9n se encuentra la Concha Ac\u00fastica Garz\u00f3n y Collazos.",
        en: "Urban park for walking and physical activity. The Garz\u00f3n y Collazos acoustic shell is also located there."
      }
    ]
  }
};

const frenchDescriptions = {
  "Annetts Coffee & Bakery": "Caf\u00e9 et boulangerie situ\u00e9s au premier \u00e9tage du b\u00e2timent Natura 54. Id\u00e9al pour le caf\u00e9, les petits-d\u00e9jeuners, les desserts et la boulangerie.",
  "Somos Pac\u00edfico": "Situ\u00e9 sur la m\u00eame Calle 54 que Natura 54, c'est l'une des recommandations les plus naturelles pour les h\u00f4tes. Restaurant ax\u00e9 sur les saveurs du Pacifique.",
  "Toppings Arepas & Drinks": "Option proche et d\u00e9contract\u00e9e pour savourer des arepas, de la restauration rapide et des boissons, parfaite pour un repas simple ou une sortie le soir.",
  "Don Pedro T\u00edpico Colombiano - Calle 60": "Restaurant de cuisine colombienne traditionnelle, viandes et grillades.",
  "Salvador y Milagros": "Restaurant de cuisine colombienne, grillades et propositions contemporaines, situ\u00e9 \u00e0 c\u00f4t\u00e9 de Don Pedro.",
  "9K Coffee Club & Food / 9K Cocina Gourmet": "Restaurant, caf\u00e9 et bar champ\u00eatre sur la route du Ca\u00f1\u00f3n del Combeima.",
  "Tamales Don Floro": "Sp\u00e9cialiste du tamal du Tolima et de la gastronomie traditionnelle.",
  "Tamal y Lechona Linda - Plaza de la 28": "Tamales, lechona et cuisine typique du Tolima \u00e0 l'int\u00e9rieur de la Plaza de Mercado La 28.",
  "Fog\u00f3n del Pollo - Jord\u00e1n": "Poulet r\u00f4ti et repas. Nous recommandons de confirmer l'adresse par t\u00e9l\u00e9phone avant la visite.",
  "El Patr\u00f3n Liquor Store": "Bonne option lorsque l'h\u00f4te souhaite prendre un verre, partager un moment et profiter de l'ambiance nocturne sans s'\u00e9loigner de Natura 54.",
  "Empireo Gastrobar": "Alternative pour ceux qui recherchent une exp\u00e9rience restaurant et gastrobar avec plats, boissons et cocktails.",
  "Acqua Power Center": "Id\u00e9al pour boutiques, restaurants, caf\u00e9s, divertissement et achats vari\u00e9s. Tr\u00e8s pratique gr\u00e2ce \u00e0 sa proximit\u00e9 de Natura 54.",
  "Surtiplaza - Acqua": "Supermarch\u00e9 pour courses, boissons, produits d'hygi\u00e8ne et articles du quotidien.",
  "Centro Comercial Multicentro": "Id\u00e9al pour mode, services, restaurants, supermarch\u00e9 et achats du quotidien. L'une des principales options commerciales du secteur.",
  "Centro Comercial La Estaci\u00f3n": "Id\u00e9al pour shopping, mode, restaurants, divertissement et pour passer un apr\u00e8s-midi complet.",
  "Mercacentro No. 4 Av. Guabinal": "Id\u00e9al pour courses, boissons, snacks, produits d'hygi\u00e8ne et tout le n\u00e9cessaire pendant le s\u00e9jour.",
  "Paseo Comercial Arkacentro": "Id\u00e9al pour achats rapides, commerces, services et pour compl\u00e9ter une visite dans la zone des centres commerciaux.",
  "Tienda D1 Distrito 60": "Supermarch\u00e9 discount pour achats rapides et produits de base.",
  "Droguer\u00eda La Rebaja Plus - La 60": "Pharmacie et petit march\u00e9 proche de la Calle 60.",
  "Panader\u00eda Morata": "Boulangerie traditionnelle situ\u00e9e derri\u00e8re Mercacentro #4.",
  "Estaci\u00f3n de Servicio Terpel Guabinal": "Carburant et services pour v\u00e9hicules.",
  "Estaci\u00f3n de Servicio Texaco - Piedra Pintada": "Station-service proche du secteur de Natura 54.",
  "Ca\u00f1\u00f3n del Combeima": "L'un des plans incontournables d'Ibagu\u00e9. Un corridor naturel vers Juntas et les contreforts du Nevado del Tolima, avec montagnes, rivi\u00e8re, cascades, points de vue et gastronomie locale.",
  "Jard\u00edn Bot\u00e1nico San Jorge": "R\u00e9serve naturelle d'environ 60 hectares dans les collines d'Ibagu\u00e9, avec sentiers de for\u00eat subandine et collections d'orchid\u00e9es, brom\u00e9liac\u00e9es, palmiers, h\u00e9liconias et plantes m\u00e9dicinales.",
  "Museo Pan\u00f3ptico de Ibagu\u00e9": "L'ancien complexe p\u00e9nitentiaire a \u00e9t\u00e9 restaur\u00e9 et transform\u00e9 en mus\u00e9e et espace culturel, en conservant son architecture en forme de croix.",
  "Parque Ecol\u00f3gico La Martinica": "Un plan pour ceux qui veulent profiter de la montagne sans trop s'\u00e9loigner d'Ibagu\u00e9, avec randonn\u00e9es, parcours \u00e9cologiques, points de vue naturels, cascades et v\u00e9g\u00e9tation.",
  "Catedral Inmaculada Concepci\u00f3n - Plaza de Bol\u00edvar": "Cath\u00e9drale principale d'Ibagu\u00e9 et l'un des lieux religieux et architecturaux embl\u00e9matiques du centre historique.",
  "Parque Caik\u00e9": "Parc th\u00e9matique et culturel avec attractions, activit\u00e9s familiales et espaces r\u00e9cr\u00e9atifs.",
  "Playa Hawai": "Parc r\u00e9cr\u00e9atif et aquatique avec piscines, toboggans, piscine-plage et h\u00e9bergement.",
  "Complejo de Piscinas Ol\u00edmpicas - Unidad Deportiva de la Calle 42": "Site pour la natation et les activit\u00e9s aquatiques.",
  "Parque Deportivo de Ibagu\u00e9": "Grand complexe sportif avec espaces pour athl\u00e9tisme, football, tennis, patinage, BMX, piscines et autres disciplines.",
  "Estadio Manuel Murillo Toro": "Principal stade de football de la ville et domicile du Deportes Tolima.",
  "Canchas Sint\u00e9ticas La Estaci\u00f3n": "Terrains de football synth\u00e9tiques \u00e0 l'int\u00e9rieur du Centro Comercial La Estaci\u00f3n.",
  "Canchas Sint\u00e9ticas El Tri\u00e1ngulo": "Autre option proche de Natura 54 pour jouer au football.",
  "The Synthetic / Canchas de la 64": "Terrains de football dans le secteur Jord\u00e1n.",
  "Parque Centenario": "Parc urbain pour marcher ou faire de l'activit\u00e9 physique. On y trouve aussi la Concha Ac\u00fastica Garz\u00f3n y Collazos."
};

const frenchDetails = {
  "Ca\u00f1\u00f3n del Combeima": [
    "Depuis Natura 54 : environ 30-45 min vers Juntas",
    "Id\u00e9al pour : nature, photographie, randonn\u00e9es et passer une demi-journ\u00e9e ou une journ\u00e9e compl\u00e8te.",
    "Recommandation Natura : partir t\u00f4t, parcourir Juntas, visiter un point de vue et d\u00e9jeuner avec une cuisine typique de la zone."
  ],
  "Jard\u00edn Bot\u00e1nico San Jorge": [
    "Depuis Natura 54 : environ 15-25 min",
    "Id\u00e9al pour : couples, familles, photographie et \u00e9cotourisme.",
    "\u00c0 faire : randonn\u00e9e, observation de la flore et de la faune, visite de points de vue et d\u00e9connexion du rythme de la ville."
  ],
  "Museo Pan\u00f3ptico de Ibagu\u00e9": [
    "Depuis Natura 54 : environ 15-20 min",
    "Id\u00e9al pour : culture, architecture, histoire et photographie.",
    "Plan recommand\u00e9 : le combiner avec une visite du centre traditionnel, de la Plaza de Bol\u00edvar et d'autres lieux historiques."
  ],
  "Parque Ecol\u00f3gico La Martinica": [
    "Depuis Natura 54 : environ 20-30 min jusqu'au secteur d'acc\u00e8s",
    "Id\u00e9al pour : randonneurs, amis, couples et voyageurs aventureux.",
    "Recommandation : porter des chaussures adapt\u00e9es, apporter de l'eau et faire les parcours de pr\u00e9f\u00e9rence le matin."
  ]
};

let currentLanguage = "es";
let currentCategory = "";

const languageScreen = document.querySelector("#languageScreen");
const guideScreen = document.querySelector("#guideScreen");
const choiceGrid = document.querySelector("#choiceGrid");
const recommendations = document.querySelector("#recommendations");
const languageToggle = document.querySelector("#languageToggle");

function mapUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address} Ibagu\u00e9 Tolima`)}`;
}

function placeDescription(place) {
  if (currentLanguage === "fr" && frenchDescriptions[place.name]) {
    return frenchDescriptions[place.name];
  }

  return place[currentLanguage] || place.en || place.es;
}

function placeDetails(place) {
  if (currentLanguage === "fr" && frenchDetails[place.name]) {
    return frenchDetails[place.name];
  }

  return place.details ? place.details[currentLanguage] || place.details.en || place.details.es : null;
}

function translatePage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[currentLanguage][key];
  });
  languageToggle.textContent = currentLanguage.toUpperCase();
  setCategoryCounts();
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
    .map((place, index) => {
      const meta = [
        place.address ? `\u{1F4CD} ${place.address}` : "",
        place.rating ? `\u2B50 ${place.rating}` : "",
        place.phone ? `\u260E\uFE0F ${copy.phone} ${place.phone}` : ""
      ]
        .filter(Boolean)
        .map((item) => `<span>${item}</span>`)
        .join("");

      const detailItems = placeDetails(place);
      const details = detailItems
        ? `<ul class="details">${detailItems.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      return `
        <article class="place-card" style="--delay: ${Math.min(index * 55, 420)}ms">
          <a class="place-image ${currentCategory}" href="${mapUrl(place)}" target="_blank" rel="noreferrer" aria-label="${copy.map}: ${place.name}">
            <span aria-hidden="true">${place.icon}</span>
          </a>
          <div class="place-body">
            <h3>${place.name}</h3>
            <div class="meta">${meta}</div>
            <p class="description">${placeDescription(place)}</p>
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

function setCategoryCounts() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    const category = button.dataset.category;
    const count = categories[category].places.length;
    let countNode = button.querySelector(".choice-count");

    if (!countNode) {
      countNode = document.createElement("small");
      countNode.className = "choice-count";
      button.append(countNode);
    }

    countNode.textContent = count;
    countNode.setAttribute("aria-label", `${count} lugares`);
  });
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
  const languages = ["es", "en", "fr"];
  const currentIndex = languages.indexOf(currentLanguage);
  currentLanguage = languages[(currentIndex + 1) % languages.length];
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

setCategoryCounts();
renderRecommendations();
