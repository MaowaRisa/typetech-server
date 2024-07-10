import express, { NextFunction, Request, Response } from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import { upload } from '../../utility/sendImageToCloudinary';

const router = express.Router();

// create new product
router.post(
    '/', 
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    validateRequest(productValidation.createProductValidationSchema), ProductControllers.createProduct
);
// get products, and search operation
router.get('/', ProductControllers.getAllProducts);
// update product
router.patch(
    '/:id', 
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    validateRequest(productValidation.updateProductValidationSchema), ProductControllers.updateProduct
);
// Get a single product
router.get('/:id', ProductControllers.getSingleProduct);
// Delete a product
router.delete('/:id', ProductControllers.deleteProduct);
export const ProductRoutes = router;
