import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function CallToAction() {
  return (
    <section className="ctaSection">
      <span className="eyebrow light">¿Tenés una idea dando vueltas?</span>
      <h2>La hacemos real, capa por capa.</h2>
      <p>Contanos qué querés crear y te orientamos sin compromiso.</p>
      <a href={whatsappUrl()} target="_blank" rel="noreferrer">Hablar con FIKORU <MessageCircle size={19} /></a>
    </section>
  );
}
