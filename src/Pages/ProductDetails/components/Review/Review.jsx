/* eslint-disable react/prop-types */
import SingleReview from "./SingleReview";

const Review = ({product}) => {
  const reviews = product?.reviews;  
  return (
    <div className=" flex-1 ">
      <h3 className=" text-lg py-2 text-primary font-semibold">
        Reviews<span className="ml-1">({reviews?.length})</span>
      </h3>
      <div className="flex mt-1">
        <span className=" basis-1/2 2md:basis-[25%] h-[3px] bg-primary "></span>
        <span className="basis-1/2 2md:basis-[75%] h-[3px] bg-[#dae1e7]  "></span>
      </div>
      {
        reviews?.map((item,index)=><SingleReview key={index} item={item} />
        )
      }
      
      
    </div>
  );
};

export default Review;
