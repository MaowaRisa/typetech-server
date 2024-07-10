import { z } from 'zod';

const createBrandValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Brand name must be string!',
    }),
  }),
});
const updateBrandValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Brand name must be string!',
    }),
  }),
});
export const brandValidations = {
  createBrandValidationSchema,
  updateBrandValidationSchema,
};
