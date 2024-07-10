import { TOrder } from './order.interface';
import { Order } from './order.model';

const createNewOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};
export const OrderServices = {
  createNewOrderIntoDB,
  getAllOrdersFromDB,
};
