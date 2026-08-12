const NATURA_WHATSAPP_NUMBER = "573153256089";
const WHATSAPP_EMOJIS = {
  wave: String.fromCodePoint(0x1f44b),
  leaf: String.fromCodePoint(0x1f33f),
  house: String.fromCodePoint(0x1f3e1),
  smile: String.fromCodePoint(0x1f60a)
};

function generarWhatsApp(apartamento = "") {
  const apartmentName = apartamento.trim();
  const intro = apartmentName
    ? `\u00a1Hola! ${WHATSAPP_EMOJIS.wave} Estoy interesado(a) en hospedarme en el ${apartmentName} de Natura 54 ${WHATSAPP_EMOJIS.leaf}${WHATSAPP_EMOJIS.house}.`
    : `\u00a1Hola! ${WHATSAPP_EMOJIS.wave} Estoy interesado(a) en hospedarme en Natura 54 ${WHATSAPP_EMOJIS.leaf}${WHATSAPP_EMOJIS.house}.`;
  const message = `${intro}

Quisiera recibir informaci\u00f3n sobre disponibilidad, tarifas y detalles del alojamiento para poder organizar mi estad\u00eda.

\u00a1Muchas gracias! Quedo atento(a) a la informaci\u00f3n. ${WHATSAPP_EMOJIS.smile}`;

  return `https://api.whatsapp.com/send?phone=${NATURA_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

function configurarBotonesWhatsApp(root = document) {
  root.querySelectorAll("[data-whatsapp]").forEach((button) => {
    button.href = generarWhatsApp(button.dataset.apartamento || "");
  });
}

window.generarWhatsApp = generarWhatsApp;
window.configurarBotonesWhatsApp = configurarBotonesWhatsApp;

configurarBotonesWhatsApp();
