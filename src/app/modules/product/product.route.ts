import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';

const router = express.Router();

// create new product
router.post(
  '/',
  validateRequest(productValidation.createProductValidationSchema),
  ProductControllers.createProduct,
);
// get products, and search operation
router.get('/', ProductControllers.getAllProducts);
// update product
router.patch(
  '/:slug',
  validateRequest(productValidation.updateProductValidationSchema),
  ProductControllers.updateProduct,
);
// Get a single product
router.get('/:id', ProductControllers.getSingleProduct);
// Delete a product
router.delete('/:id', ProductControllers.deleteProduct);
export const ProductRoutes = router;
