import { Schema, model } from 'mongoose';
import { TOrder, TOrderedProducts } from './order.interface';
const orderedProductsSchema = new Schema<TOrderedProducts>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});
const orderSchema = new Schema<TOrder>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  products: [orderedProductsSchema],
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, required: true },
});

export const Order = model<TOrder>('Order', orderSchema);
