"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="detailGallery">
      <div className="detailMainImage">
        <Image src={active} alt={name} fill sizes="(max-width: 900px) 94vw, 52vw" priority />
      </div>
      <div className="detailThumbs" aria-label="Galería del producto">
        {images.map((image, index) => (
          <button key={`${image}-${index}`} className={active === image ? "active" : ""} onClick={() => setActive(image)} aria-label={`Ver imagen ${index + 1} de ${name}`}>
            <Image src={image} alt="" fill sizes="100px" />
          </button>
        ))}
      </div>
    </div>
  );
}
