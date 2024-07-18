import { Schema, model } from 'mongoose';
import { IProductModel, TProduct } from './product.interface';

const productSchema = new Schema<TProduct, IProductModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    brand: { type: String, required:  true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    description: { type: String, required: true },
    image: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
// Static method for checking the deleted product
productSchema.statics.isProductExist = async function (name: string) {
  const product = await Product.findOne({ name: name, isDeleted: false });
  return product;
};
productSchema.statics.isProductDeleted = async function (id: string) {
  const deletedProduct = await Product.findOne({ _id: id, isDeleted: true });
  return deletedProduct;
};
export const Product = model<TProduct, IProductModel>('Product', productSchema);
