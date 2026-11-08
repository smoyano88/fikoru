import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FIKORU | Impresión 3D personalizada en Argentina",
    template: "%s | FIKORU",
  },
  description: siteConfig.description,
  keywords: [
    "impresión 3D Argentina",
    "regalos personalizados",
    "litofanía personalizada",
    "lámparas 3D personalizadas",
    "cortantes de galletitas personalizados",
    "sellos para galletitas 3D",
    "calendario perpetuo",
    "llaveros NFC",
    "llaveros clicker personalizados",
    "carteles 3D para negocios",
    "exhibidores QR personalizados",
    "souvenirs personalizados para 15 años",
    "decoración 3D para cumpleaños",
    "flexis articulados",
    "chapitas para mascotas",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "FIKORU",
    title: "FIKORU · Ideas que toman forma",
    description: siteConfig.description,
    images: ["/assets/calendario-litofania-encendido.jpg"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR"><body>{children}</body></html>;
}
