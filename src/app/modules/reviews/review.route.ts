import express from 'express';
import { ReviewControllers } from './review.controller';

const router = express.Router();

// create new review
router.post('/:id', ReviewControllers.addReview);
// get all reviews
router.get('/', ReviewControllers.getAllReviews);

export const ReviewRoutes = router;
