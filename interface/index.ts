export interface IInitialState {
  search: string;
  is_searching: boolean;
  filter_by: string | undefined;

  //   productId: string | null;
}
export type apiData = {
  text: string;
};

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  brand: string;
  price: string;
}
export interface IDataProps {
  data: Product[];
}

export interface ProjectComponentProps {
  product: Product;
}
