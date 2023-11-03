/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({rating, setRating}) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((value, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              onChange={() => setRating(currentRating)}
              value={currentRating}
              type="radio"
              name="rating"
            />
            <FaStar
              color={currentRating <= (hover || rating) ? "rgb(255, 153, 0)" : "#e4e5e9"}
              className="cursor-pointer "
              size={30}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
