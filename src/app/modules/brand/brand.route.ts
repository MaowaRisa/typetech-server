import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { brandValidations } from './brand.validation';
import { BrandControllers } from './brand.controller';
import { upload } from '../../utility/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(brandValidations.createBrandValidationSchema),
  BrandControllers.createBrand,
);
router.get('/', BrandControllers.getAllBrands);
router.patch(
  '/:id',
  validateRequest(brandValidations.updateBrandValidationSchema),
  BrandControllers.updateBrand,
);

export const BrandRoutes = router;
