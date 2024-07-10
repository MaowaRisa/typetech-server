import { TBrand } from './brand.interface';
import { Brand } from './brand.model';

const createBrandIntoDB = async (payload: TBrand) => {
  const result = await Brand.create(payload);
  return result;
};
const getAllBrandsFromDB = async () => {
  const result = await Brand.find();
  return result;
};

const updateBrandIntoDB = async (
  id: string,
  payload: Partial<TBrand>,
) => {
  const result = await Brand.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const BrandServices = {
  createBrandIntoDB,
  getAllBrandsFromDB,
  updateBrandIntoDB,
};
