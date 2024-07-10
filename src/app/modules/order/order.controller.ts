/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { OrderServices } from './order.service';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import httpStatus from 'http-status';

const createNewOrder: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderServices.createNewOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully!',
    data: result,
  });
});

export const OrderControllers = {
  createNewOrder,
  getAllOrders,
};
