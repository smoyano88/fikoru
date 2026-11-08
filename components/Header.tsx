import Image from "next/image";
import { whatsappUrl } from "@/config/site";

export function Header() {
  return (
    <>
      <div className="announcement">
        LANZAMIENTO · 10% OFF EN EL CALENDARIO CON LITOFANÍA
      </div>
      <header className="navShell">
        <a className="brand" href="/#inicio" aria-label="FIKORU inicio">
          <Image src="/assets/fikoru-logo.png" alt="FIKORU" width={170} height={90} priority />
        </a>
        <nav aria-label="Navegación principal">
          <a href="/#productos">Productos</a>
          <a href="/#iluminacion">Iluminación</a>
          <a href="/#como-comprar">Cómo comprar</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#preguntas">Preguntas</a>
        </nav>
        <a className="navCta" href={whatsappUrl()} target="_blank" rel="noreferrer">
          Pedir presupuesto
        </a>
      </header>
    </>
  );
}
