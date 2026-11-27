// Add the shop's WhatsApp number here: country code + number, digits only.
// Format: "91" followed by the 10-digit mobile number.
const WHATSAPP_NUMBER = "";

const WHATSAPP_MESSAGE = "Hello Sri Santhi Selection, I would like to know about your products.";

const links = document.querySelectorAll(".whatsapp-link");

if (WHATSAPP_NUMBER) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  links.forEach((link) => {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
  });
} else {
  // Until a number is added, the buttons scroll to the contact section and explain why.
  const status = document.getElementById("whatsapp-status");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      status.hidden = false;
    });
  });
}
