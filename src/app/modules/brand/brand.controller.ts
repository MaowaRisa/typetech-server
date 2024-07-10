import { RequestHandler } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { BrandServices } from './brand.service';
import httpStatus from 'http-status';


const createBrand: RequestHandler = catchAsync(async (req, res) => {
  const result = await BrandServices.createBrandIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand created successfully!',
    data: result,
  });
});
const getAllBrands: RequestHandler = catchAsync(async (req, res) => {
  const result = await BrandServices.getAllBrandsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All brands retrieved successfully!',
    data: result,
  });
});

const updateBrand: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BrandServices.updateBrandIntoDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand updated successfully!',
    data: result,
  });
});
export const BrandControllers = {
  createBrand,
  getAllBrands,
  updateBrand
};
