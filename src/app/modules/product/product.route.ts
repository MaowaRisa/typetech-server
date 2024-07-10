import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// create new product
router.post('/', ProductControllers.createProduct);
// get products, and search operation
router.get('/', ProductControllers.getAllProducts);
// update product
router.put('/:id', ProductControllers.updateProduct);
// Get a single product
router.get('/:id', ProductControllers.getSingleProduct);
// Delete a product
router.delete('/:id', ProductControllers.deleteProduct);
export const ProductRoutes = router;
