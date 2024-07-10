import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { Brand } from '../brand/brand.model';
import { productSearchableFields } from './product.constants';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { generateSKU } from './product.utils';

const createProductIntoDB = async (payload: TProduct) => {
  const sku = generateSKU(payload.name);
  payload.sku = sku; // store keeping unit
  // check brand is valid
  const brand = await Brand.findById({_id : payload.brand});
  if(!brand){
    throw new AppError(httpStatus.NOT_FOUND, "No brand available");
  }
  const result = await Product.create(payload);
  return result;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find(),query
  )
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
  id: string,
  productData: Partial<TProduct>,
) => {
  // Built in static method for checking deleted product
  if ((await Product.findOne({ _id: id })) === null) {
    throw new Error('This product already deleted or moved!');
  }
  const result = await Product.findByIdAndUpdate(id, productData, {
    new: true
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
