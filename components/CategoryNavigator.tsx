import { BriefcaseBusiness, Cookie, Lightbulb, PartyPopper, PawPrint, Sparkles } from "lucide-react";

const categoryLinks = [
  { label: "Lámparas y litofanías", detail: "Regalos que se iluminan", icon: Lightbulb },
  { label: "Diseños a medida", detail: "Desde una idea o una foto", icon: Sparkles },
  { label: "Para negocios", detail: "QR, carteles y exhibidores", icon: BriefcaseBusiness },
  { label: "Eventos", detail: "Cumples, 15 y souvenirs", icon: PartyPopper },
  { label: "Cortantes y sellos", detail: "Modelos listos o a medida", icon: Cookie },
  { label: "Mascotas", detail: "Identificación y recuerdos", icon: PawPrint },
];

export function CategoryNavigator() {
  return (
    <section className="categoryNav" aria-label="Comprar por categoría">
      <div className="categoryIntro">
        <span className="eyebrow">Encontrá lo tuyo</span>
        <h2>¿Qué estás buscando?</h2>
      </div>
      <div className="categoryTiles">
        {categoryLinks.map(({ label, detail, icon: Icon }) => (
          <a key={label} href="#productos">
            <span><Icon size={22} /></span>
            <strong>{label}</strong>
            <small>{detail}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
