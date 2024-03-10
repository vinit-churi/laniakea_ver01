export type TAllProductsHeroImageType = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
};

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  discountedPrice: number;
  tags: string[];
  image: string;
}
