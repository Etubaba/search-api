import { transformToProductImage } from "@/helper";
import { Product } from "@/interface";

export const transformToProduct = (products: any): Product[] => {
  if (!products) {
    return [];
  }

  if (Array.isArray(products) && products.length) {
    return products.map((item: any) => ({
      id: item.id,
      name: item.name,
      brand: item.brand,
      imageUrl: transformToProductImage(item.image),
      price: item.price,
    }));
  }

  if (typeof products === "object" && products.products) {
    return products.products.map((item: any) => ({
      id: item.id,
      name: item.name,
      brand: item.brand,
      imageUrl: transformToProductImage(item.image),
      price: item.price,
    }));
  }

  return [];
};
