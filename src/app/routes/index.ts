import { Router } from 'express';
import { BrandRoutes } from '../modules/brand/brand.route';
import { ProductRoutes } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ReviewRoutes } from '../modules/reviews/review.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/brands',
    route: BrandRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
];
moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
