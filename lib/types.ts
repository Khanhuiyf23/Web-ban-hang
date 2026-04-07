export type Product = {
  id: number;
  slug: string;
  name: string;
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories' | 'Lifestyle';
  price: number;
  originalPrice?: number;
  colors: string[];
  sizes: string[];
  badge?: 'Hot' | 'New' | 'Sale';
  rating: number;
  reviews: number;
  description: string;
  details: string;
  images: string[];
};

export type CartItem = {
  productId: number;
  size: string;
  color: string;
  quantity: number;
};
