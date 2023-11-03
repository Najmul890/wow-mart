/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import AccountIcon from "../../../../Common/MobileHeader/Icons/AccountIcon";
import StaticRating from "../../../../Common/components/StaticRating";
import profile from "../../../../assets/ralph.png";


const SingleReview = ({ item }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [review, setReview] = useState(item?.review);
  useEffect(() => {
    if (seeMore) {
      setReview(item?.review);
    } else {
      setReview(review?.slice(0, 90));
    }
  }, [seeMore, review]);
  return (
    <div className="mt-3 mb-5">
      <div className="flex gap-4 items-center ">
        <div className="">
        <img className="w-[30px] h-[30px] xs:w-[50px] xs:h-[50px] rounded-full " src={profile} alt="user" />
        </div>
        <div>
          <h4 className="text-xl text-primary">{item?.user}</h4>
          <StaticRating rating={item?.rating} />
          <div className="flex gap-3 items-center 2xs:hidden ">
            <div className="flex items-center font-semibold text-primary text-lg ">
              4.7
            </div>
            <div className="flex items-center text-primary text-base ">
              1.5 months ago
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-base text-primary">
          {review}
          {!seeMore && review?.length > 89 && "..........."}
          {review?.length > 89 && (
            <span
              onClick={() => setSeeMore(!seeMore)}
              className="ml-4 font-semibold text-sm cursor-pointer border-b border-b-primary text-primary "
            >
              {seeMore ? "See Less" : "See More"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleReview;
