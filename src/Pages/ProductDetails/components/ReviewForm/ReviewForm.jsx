/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import Rating from "../Rating";
import { DataContext } from "../../../../Common/context/DataProvider";
import { useNavigate } from "react-router-dom";

const ReviewForm = ({ product }) => {
  const { user, products, setProducts } = useContext(DataContext);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);
  const navigate = useNavigate();
  const [ratingError, setRatingError] = useState(null);

  const selectedProduct = products?.find((pd) => pd.id == product.id);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      if (Number(rating) > 0) {
        selectedProduct.reviews.push({
          user: user?.name,
          rating: rating,
          review: review,
        });
        setProducts([...products]);
        setRating(null);
        setReview("");
        setRatingError(null);
      }else{
        setRatingError("Please put a rating");
      }
    }
  };
  return (
    <div className="flex-1 py-2 text-primary">
      <h3 className="text-xl sm:text-2xl font-semibold text-primary ">
        Write a Review for this Product
      </h3>
      <form onSubmit={handleSubmitReview} >
      <div className="mt-5 text-lg ">Your Rating *</div>
      <div className="mt-3">
        <Rating rating={rating} setRating={setRating} />
      </div>
      {
        ratingError && 
        <div className="mt-1 text-secondary font-semibold ">{ratingError}</div>
      }
      <div className="mt-5 text-lg ">Your Review *</div>
      <textarea
        required
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
        className="textarea textarea-bordered mt-3 textarea-lg h-[150px] 2md:h-[250px] w-full"
      ></textarea>
      <button
        
        className=" hover:bg-primary main-btn mt-3"
      >
        Submit
      </button>
      </form>
    </div>
  );
};

export default ReviewForm;
