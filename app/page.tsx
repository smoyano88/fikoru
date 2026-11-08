import { Benefits } from "@/components/Benefits";
import { BrandStory } from "@/components/BrandStory";
import { CallToAction } from "@/components/CallToAction";
import { CategoryNavigator } from "@/components/CategoryNavigator";
import { LightingLaunch } from "@/components/LightingLaunch";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { PersonalizationSteps } from "@/components/PersonalizationSteps";
import { StarProduct } from "@/components/StarProduct";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    description: siteConfig.description,
    address: { "@type": "PostalAddress", addressCountry: "AR" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Productos FIKORU",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        priceCurrency: "ARS",
        price: product.price,
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: `${siteConfig.url}${product.image}`,
        },
      })),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <Hero />
      <Benefits />
      <CategoryNavigator />
      <LightingLaunch />
      <ProductCatalog />
      <PersonalizationSteps />
      <StarProduct />
      <BrandStory />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  );
}
