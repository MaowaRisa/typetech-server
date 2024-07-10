import { z } from 'zod';

// ordered products
const orderedProductsSchema = z.object({
  productId: z.string()
});

// order creation
const createOrderSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNo: z.string(),
  deliveryAddress: z.string(),
  products: z.array(orderedProductsSchema),
  totalPrice: z.number().positive(),
  isPaid: z.boolean()
});

// order update
const updateOrderSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phoneNo: z.string().optional(),
  deliveryAddress: z.string().optional(),
  products: z.array(orderedProductsSchema).optional(),
  totalPrice: z.number().positive().optional(),
  isPaid: z.boolean().optional()
});

export const orderValidation = { createOrderSchema, updateOrderSchema };
