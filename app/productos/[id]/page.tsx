import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock3, MessageCircle, PackageCheck, Palette } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { getProduct, products } from "@/data/products";
import { whatsappUrl } from "@/config/site";

const currency = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return { title: product.name, description: product.description, openGraph: { images: [product.image] } };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <main>
      <Header />
      <section className="productDetail">
        <a className="backLink" href="/#productos"><ArrowLeft size={17} /> Volver al catálogo</a>
        <div className="detailGrid">
          <ProductGallery images={product.gallery} name={product.name} />
          <div className="detailInfo">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="detailLead">{product.longDescription || product.description}</p>
            <div className="detailPrice">
              <strong>{currency.format(product.price)}</strong>
              {product.previousPrice && <del>{currency.format(product.previousPrice)}</del>}
              <small>Precio desde · sujeto a personalización</small>
            </div>
            {product.minOrder && <p className="minimum"><PackageCheck size={18} /> {product.minOrder}</p>}
            <a className="detailCta" href={whatsappUrl(product.name)} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Consultar y personalizar</a>
            <div className="detailAssurance"><span><Clock3 size={17} /> {product.leadTime || "Tiempo a confirmar"}</span><span><Palette size={17} /> Diseño antes de producir</span></div>
          </div>
        </div>
        <div className="detailPanels">
          <article>
            <span className="eyebrow">Características</span>
            <h2>Qué incluye</h2>
            <ul>{product.features?.map((feature) => <li key={feature}><Check size={18} /> {feature}</li>)}</ul>
          </article>
          <article>
            <span className="eyebrow">Hecho para vos</span>
            <h2>Podés elegir</h2>
            <ul>{product.options?.map((option) => <li key={option}><Check size={18} /> {option}</li>)}</ul>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
