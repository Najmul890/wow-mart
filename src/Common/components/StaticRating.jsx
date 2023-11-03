/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaStar } from "react-icons/fa";

const StaticRating = ({rating}) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((value, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            
            <FaStar
              color={currentRating <= (rating) ? "rgb(255, 153, 0)" : "#e4e5e9"}
              
              size={13}
              
            />
          </label>
        );
      })}
    </div>
  );
};

export default StaticRating;
