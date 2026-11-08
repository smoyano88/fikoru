import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`productCard product-${product.id}`}>
      <a className="productImage" href={`/productos/${product.id}`} aria-label={`Ver ${product.name}`}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 30vw" />
        <span className="productBadge">{product.badge}</span>
      </a>
      <div className="productBody">
        <div className="productMeta"><span className="category">{product.category}</span>{product.customizable && <span className="customizable">Personalizable</span>}</div>
        <h3><a href={`/productos/${product.id}`}>{product.name}</a></h3>
        <p>{product.description}</p>
        <div className="productBottom">
          <div>
            <strong>{product.previousPrice ? currency.format(product.price) : `Desde ${currency.format(product.price)}`}</strong>
            {product.previousPrice && <del>{currency.format(product.previousPrice)}</del>}
          </div>
          <a href={`/productos/${product.id}`}>Ver producto <ArrowRight size={16} /></a>
        </div>
      </div>
    </article>
  );
}
