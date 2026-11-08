"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Filter = (typeof categories)[number];

export function ProductCatalog() {
  const [active, setActive] = useState<Filter>("Todos");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const visible = useMemo(
    () => products.filter((product) => {
      const matchesCategory = active === "Todos" || product.category === active;
      const searchable = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("es");
      return matchesCategory && searchable.includes(query.trim().toLocaleLowerCase("es"));
    }),
    [active, query],
  );
  const isBrowsingAll = active === "Todos" && query.trim() === "";
  const displayed = isBrowsingAll && !showAll ? visible.slice(0, 9) : visible;

  return (
    <section className="section productsSection" id="productos">
      <div className="sectionHeading">
        <span className="eyebrow">Catálogo FIKORU</span>
        <h2>Todo lo que podemos crear en 3D</h2>
        <p>Este catálogo es un punto de partida: hacemos iluminación, regalos, productos para negocios, eventos, cocina creativa y piezas totalmente a medida.</p>
      </div>
      <div className="catalogTools">
        <div className="filters" role="group" aria-label="Filtrar productos">
          {categories.map((category) => (
            <button key={category} className={active === category ? "active" : ""} onClick={() => { setActive(category); setShowAll(true); }}>
              {category}
            </button>
          ))}
        </div>
        <label className="productSearch">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto…" aria-label="Buscar producto" />
        </label>
      </div>
      <div className="productGrid">
        {displayed.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      {isBrowsingAll && !showAll && visible.length > displayed.length && (
        <button className="catalogMore" onClick={() => setShowAll(true)}>Ver catálogo completo <ChevronDown size={18} /></button>
      )}
      {visible.length === 0 && <div className="emptyCatalog"><strong>No encontramos ese producto.</strong><span>Probá otra búsqueda o escribinos: también hacemos diseños a pedido.</span></div>}
      <p className="catalogNote">Precios orientativos en pesos argentinos. Cada producto se realiza a pedido y el valor final puede variar según tamaño, cantidad y personalización.</p>
    </section>
  );
}
