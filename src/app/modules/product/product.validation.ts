import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({required_error: "Name is required."}),
    brand: z.string({required_error: "Brand is required."}),
    quantity: z.number({required_error: "Quantity is required."}),
    price: z.number({required_error: "Price is required."}),
    description: z.string({required_error: "Description is required."})
  })
});
const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({required_error: "Name is required."}).optional(),
    brand: z.string({required_error: "Brand is required."}).optional(),
    quantity: z.number({required_error: "Quantity is required."}).optional(),
    price: z.number({required_error: "Price is required."}).optional(),
    description: z.string({required_error: "Description is required."}).optional()
  })
});


export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema
}
