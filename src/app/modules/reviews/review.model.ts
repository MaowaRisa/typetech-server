import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

export const Review = model<TReview>("Review", reviewSchema);
