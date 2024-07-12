import { ObjectId } from "mongoose";

export type TReview = {
  product: ObjectId;
  email: string;
  rating: number;
  comment: string;
};
