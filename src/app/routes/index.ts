import { Router } from "express";
import { BrandRoutes } from "../modules/brand/brand.route";
import { ProductRoutes } from "../modules/product/product.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/brands',
        route: BrandRoutes
    },
    {
        path: '/products',
        route: ProductRoutes
    },
];
moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;