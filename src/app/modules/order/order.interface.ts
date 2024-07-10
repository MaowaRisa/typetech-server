import { Types } from "mongoose";

export type TOrder = {
  name: string;
  email: string;
  phoneNo: string;
  deliveryAddress: string;
  products: [Types.ObjectId];
  totalPrice: number;
  isPaid: boolean;
};
export type TOrderedProducts = {
  productId: Types.ObjectId;
};
