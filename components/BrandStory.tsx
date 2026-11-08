import Image from "next/image";

export function BrandStory() {
  return (
    <section className="section story" id="nosotros">
      <div className="storyMark">
        <Image src="/assets/fikoru-logo.png" alt="Logo FIKORU con silueta de Akita" width={600} height={600} />
      </div>
      <div>
        <span className="eyebrow">Una marca con historia</span>
        <h2>Cuatro nombres. Un recuerdo. Miles de ideas.</h2>
        <p>FIKORU nace de <b>Figo, Kongo, Tofi y Haru</b>. Haru, nuestro Akita, inspiró la silueta que nos acompaña y la idea de crear objetos capaces de guardar historias.</p>
        <p>Transformamos ideas, fotos y pequeños momentos en productos 3D hechos para durar, sorprender y emocionar.</p>
      </div>
    </section>
  );
}
