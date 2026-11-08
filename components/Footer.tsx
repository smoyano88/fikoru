import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer>
      <a className="brand footerBrand" href="/#inicio">
        <Image src="/assets/fikoru-logo.png" alt="FIKORU" width={170} height={90} />
      </a>
      <p>Impresión 3D con personalidad.<br />{siteConfig.location} · {siteConfig.address}</p>
      <div className="footerLinks"><a href="/#productos">Productos</a><a href="/#lanzamiento">Lanzamiento</a><a href="/#preguntas">Preguntas</a></div>
      <div className="socials">
        <a href={siteConfig.instagram || "#"} aria-label="Instagram"><Instagram /></a>
        <a href={siteConfig.facebook || "#"} aria-label="Facebook"><Facebook /></a>
      </div>
      <small>© 2026 FIKORU. Hecho capa por capa.</small>
    </footer>
  );
}
