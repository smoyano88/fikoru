import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function StarProduct() {
  return (
    <section className="starSection" id="lanzamiento">
      <div className="starGallery">
        <div className="mainShot"><Image src="/assets/calendario-litofania-relieve.jpg" alt="Calendario perpetuo con relieve" fill sizes="(max-width: 900px) 85vw, 42vw" /></div>
        <div className="detailShot"><Image src="/assets/calendario-litofania-encendido.jpg" alt="Litofanía iluminada" fill sizes="(max-width: 900px) 45vw, 22vw" /></div>
      </div>
      <div className="starCopy">
        <span className="eyebrow light"><Star fill="currentColor" size={16} /> Lanzamiento FIKORU</span>
        <h2>Una foto, una luz,<br />un recuerdo para siempre.</h2>
        <p>Calendario perpetuo que no vence y litofanía personalizada que cobra vida al encenderse. Dos regalos en una sola pieza.</p>
        <ul>
          <li><Check /> Día, mes y fecha regulables</li>
          <li><Check /> Litofanía creada con tu foto</li>
          <li><Check /> Luz cálida integrada</li>
          <li><Check /> Colores personalizables</li>
        </ul>
        <div className="launchPrice">
          <span><del>$49.900</del><strong>$44.900</strong></span>
          <a href={whatsappUrl("Calendario perpetuo con litofanía")} target="_blank" rel="noreferrer">Quiero el mío <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
