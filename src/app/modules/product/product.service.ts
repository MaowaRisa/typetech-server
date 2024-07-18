/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { productSearchableFields } from './product.constants';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { generateSlug } from './product.utils';

const createProductIntoDB = async (payload: TProduct) => {

  const isProductExist = await Product.isProductExist(payload.name)
  if(isProductExist){
    throw new AppError(httpStatus.CONFLICT, 'Product already exists!')
  }
  const slug = generateSlug(payload.name);
  payload.slug = slug;

  const result = await Product.create(payload);
  return result;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;

  return result;
};
const getSingleProductFromDB = async (id: string) => {
  // checking deleted product
  if ((await Product.findOne({ _id: id })) === null) {
    throw new Error('This product already deleted or moved!');
  }
  const result = await Product.findOne({ _id: id, isDeleted: false });
  return result;
};
const updateProductIntoDB = async (
  slug: string,
  payload: Partial<TProduct>,
) => {
  // Check if the product exists
  const product = await Product.find({slug: slug});
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }
  // Update product with new data
  const result = await Product.findOneAndUpdate({slug: slug}, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteProductFromDB = async (id: string) => {
  if (!(await Product.findOne({ _id: id }))) {
    throw new Error('This product already deleted or moved!');
  }
  const result = await Product.deleteOne({ _id: id });
  return result;
};
// check available product
const isQuantityAvailableInDB = async (id: string, quantity: number) => {
  const result = await Product.findOne({
    _id: id,
    isDeleted: false,
    quantity: { $gte: quantity },
  });
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  updateProductIntoDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  isQuantityAvailableInDB,
};
