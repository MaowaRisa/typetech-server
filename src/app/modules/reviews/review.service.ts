/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "../product/product.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (
  id: string,
  reviewData: Partial<TReview>
): Promise<TReview | any> => {
  const session = await Product.startSession();

  const product = await Product.findById({ _id: id });

  if (!product) {
    throw new Error("Product not found");
  }

  try {
    session.startTransaction();

    const review = await Review.create(
      [
        {
          product: product._id,
          ...reviewData,
        },
      ],
      { session }
    );

    const reviewsCount = await Review.countDocuments({
      product: product._id,
    }).session(session);

    // throw new Error("Movie not found");

    await Product.updateOne({ _id: id }, { rating: reviewsCount }, { session });

    await session.commitTransaction();
    session.endSession();

    return review[0];
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
const getAllReviews = async (id: string): Promise<TReview[]> => {
  const product = await Product.findOne({ _id: id });

  if (!product) {
    throw new Error("Product not found");
  }

  return await Review.find({ product: product._id });
};


export const ReviewServices = {
  addReview,
  getAllReviews,
};
