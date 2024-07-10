import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { brandValidations } from './brand.validation';
import { BrandControllers } from './brand.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(
    brandValidations.createBrandValidationSchema
  ),
  BrandControllers.createBrand,
);
router.get('/', BrandControllers.getAllBrands);
router.patch(
  '/:id',
  validateRequest(
    brandValidations.updateBrandValidationSchema
  ),
  BrandControllers.updateBrand,
);

export const BrandRoutes = router;
