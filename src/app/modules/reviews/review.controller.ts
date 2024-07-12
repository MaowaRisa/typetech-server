/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ReviewServices } from './review.service';
import catchAsync from '../../utility/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utility/sendResponse';

const addReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const reviewData = req.body;
    const result = await ReviewServices.addReview(id, reviewData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review is created successfully!',
      data: result,
    });
  },
);

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviews(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Reviews are fetched successfully !',
      data: result,
    });
  } catch (err: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: 'Could not fetch reviews!',
      data: err,
    });
  }
};

export const ReviewControllers = {
  addReview,
  getAllReviews,
};
