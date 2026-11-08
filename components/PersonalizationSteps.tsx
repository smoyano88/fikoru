import { MessageCircle, Palette, PackageCheck } from "lucide-react";

const steps = [
  { number: "01", title: "Contanos tu idea", text: "Elegí un producto o mandanos una referencia por WhatsApp.", icon: MessageCircle },
  { number: "02", title: "Definimos el diseño", text: "Combinamos nombre, colores y detalles antes de producir.", icon: Palette },
  { number: "03", title: "Lo hacemos para vos", text: "Imprimimos, revisamos y preparamos tu pedido con cuidado.", icon: PackageCheck },
];

export function PersonalizationSteps() {
  return (
    <section className="section stepsSection" id="como-comprar">
      <div className="sectionHeading centered">
        <span className="eyebrow">Simple y personalizado</span>
        <h2>De tu idea a tus manos</h2>
        <p>Comprar algo único no tiene por qué ser complicado.</p>
      </div>
      <div className="stepsGrid">
        {steps.map(({ number, title, text, icon: Icon }) => (
          <article key={number}>
            <span className="stepNumber">{number}</span>
            <div className="stepIcon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
