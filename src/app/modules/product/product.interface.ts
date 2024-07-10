import { Model, Types } from 'mongoose';

export type TProduct = {
  sku: string;
  name: string;
  brand: Types.ObjectId;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  isDeleted: boolean;
};
// static method
export interface IProductModel extends Model<TProduct> {
  isProductDeleted(id: string): Promise<TProduct | null>;
}
