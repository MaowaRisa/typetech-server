/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from '../../utility/sendImageToCloudinary';
import { TBrand } from './brand.interface';
import { Brand } from './brand.model';

const createBrandIntoDB = async (payload: TBrand, file:any) => {
  // brand image upload
  if (file) {
    const imageName = `${payload.name}`;
    const path = file?.path;

    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.image = secure_url as string;
  }
  const result = await Brand.create(payload);
  return result;
};
const getAllBrandsFromDB = async () => {
  const result = await Brand.find();
  return result;
};

const updateBrandIntoDB = async (id: string, payload: Partial<TBrand>) => {
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
