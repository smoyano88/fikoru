export type ProductCategory = "Iluminación" | "Llaveros" | "Para negocios" | "Organización" | "Souvenirs" | "Decoración para eventos" | "Cocina creativa" | "Flexis" | "Mascotas" | "Regalos";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  previousPrice?: number;
  image: string;
  badge: string;
  description: string;
  featured?: boolean;
  customizable?: boolean;
  gallery: string[];
  longDescription?: string;
  features?: string[];
  options?: string[];
  leadTime?: string;
  minOrder?: string;
}
