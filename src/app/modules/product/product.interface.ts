import { Model } from 'mongoose';

export type TProduct = {
  name: string;
  slug: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  image: string;
  isDeleted: boolean;
};
// static method
export interface IProductModel extends Model<TProduct> {
  isProductExist(name: string): Promise<TProduct | null>;
  isProductDeleted(id: string): Promise<TProduct | null>;
}
