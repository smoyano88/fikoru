import Image from "next/image";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="heroCopy">
        <span className="eyebrow"><Sparkles size={16} /> Lanzamiento FIKORU</span>
        <h1>Tu historia.<br /><em>Convertida en luz.</em></h1>
        <p>Un calendario perpetuo personalizado con tu fotografía transformada en litofanía. Un regalo que emociona hoy y acompaña todos los años.</p>
        <div className="heroActions">
          <a className="button primary" href="/productos/calendario-litofania">Conocer el calendario <ArrowRight size={18} /></a>
          <a className="button secondary" href="#productos">Explorar catálogo</a>
        </div>
        <div className="trustLine"><span>Tu foto en litofanía</span><span>Calendario para siempre</span><span>Hecho en Argentina</span></div>
      </div>
      <div className="heroMedia">
        <div className="heroPhoto">
          <Image src="/assets/calendario-litofania-encendido.jpg" alt="Calendario perpetuo personalizado con litofanía iluminada" fill sizes="(max-width: 900px) 90vw, 45vw" priority />
        </div>
        <div className="priceCard"><span>Precio lanzamiento</span><strong>$44.900</strong><small>Antes $49.900</small></div>
        <div className="madeCard"><Heart fill="currentColor" size={17} /> Personalizado con tu foto</div>
      </div>
    </section>
  );
}
