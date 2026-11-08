import Image from "next/image";
import { ArrowRight, Check, LampDesk } from "lucide-react";

export function LightingLaunch() {
  return (
    <section className="featureLaunch" id="iluminacion">
      <div className="featurePhoto">
        <Image src="/assets/products/lighting/lampara-futurista-real-4x5.jpg" alt="Lámpara de mesa futurista impresa en 3D con luz cálida" fill sizes="(max-width: 900px) 100vw, 55vw" />
        <span className="featureBubble"><LampDesk size={18} /> Impresión 3D + luz LED</span>
      </div>
      <div className="featureCopy">
        <span className="eyebrow light">Diseño que también ilumina</span>
        <h2>Una escultura de día. Una atmósfera de noche.</h2>
        <p>Líneas orgánicas, luz cálida y fabricación a pedido. Una pieza moderna para escritorios, livings y setups que buscan algo distinto.</p>
        <ul>
          <li><Check size={18} /> Diseño contemporáneo</li>
          <li><Check size={18} /> Luz ambiental cálida</li>
          <li><Check size={18} /> Impresa a pedido</li>
          <li><Check size={18} /> Colores personalizables</li>
        </ul>
        <div className="featureAction">
          <span><small>Precio lanzamiento</small><strong>$29.900</strong></span>
          <a href="/productos/lampara-futurista">Ver lámpara <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
