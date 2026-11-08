import Image from "next/image";
import { ArrowRight, Check, MousePointerClick } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function ClickerLaunch() {
  return (
    <section className="clickerLaunch" id="clickers">
      <div className="clickerPhoto">
        <Image src="/assets/products/llaveros-clicker-personalizados.png" alt="Tres llaveros clicker personalizados con los nombres Thiago, Sofía e Ian" fill sizes="(max-width: 900px) 100vw, 55vw" />
        <span className="clickBubble"><MousePointerClick size={18} /> Botones móviles</span>
      </div>
      <div className="clickerCopy">
        <span className="eyebrow light">El regalo que van a tocar todo el día</span>
        <h2>Un nombre convertido en experiencia</h2>
        <p>No es solamente un llavero: cada letra funciona como un clicker. Elegís el nombre, la base y el color de las letras; nosotros lo hacemos realidad.</p>
        <ul>
          <li><Check size={18} /> Nombre personalizado</li>
          <li><Check size={18} /> Combinaciones de color</li>
          <li><Check size={18} /> Liviano y resistente</li>
          <li><Check size={18} /> Ideal para regalo</li>
        </ul>
        <div className="clickerAction">
          <span><small>Precio lanzamiento desde</small><strong>$6.900</strong></span>
          <a href={whatsappUrl("Llavero clicker personalizado")} target="_blank" rel="noreferrer">Elegir nombre y colores <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
