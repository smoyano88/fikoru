export const siteConfig = {
  name: "FIKORU",
  description:
    "Diseño e impresión 3D personalizada: lámparas, litofanías, regalos, cortantes, soluciones para negocios, eventos y piezas a medida.",
  url: "https://fikoru.com.ar",
  location: "Argentina",
  address: "Dirección a completar",
  whatsapp: "5491173646056",
  instagram: "",
  facebook: "",
};

export function whatsappUrl(product?: string) {
  const message = product
    ? `Hola FIKORU, quiero consultar por: ${product}`
    : "Hola FIKORU, quiero consultar por una impresión 3D personalizada";
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
