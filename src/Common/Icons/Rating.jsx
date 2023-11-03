import React from "react";

const Rating = (item) => {
  return (
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-primary"
        checked={item?.rating === 1}
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-primary"
        checked={item?.rating === 2}
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-primary"
        checked={item?.rating === 3}
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-primary"
        checked={item?.rating === 4}
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-primary"
        checked={item?.rating === 5}
      />
    </div>
  );
};

export default Rating;
