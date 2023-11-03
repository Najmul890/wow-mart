import React, { useContext } from "react";
import lemon from "../../assets/Lemon.png";
import { DataContext } from "../../Common/context/DataProvider";
import { Link } from "react-router-dom";

const CategoryMobile = () => {
  const { categories, setCategory } = useContext(DataContext);
  return (
    <div className="py-5 text-primary mb-10">
      <h2 className="px-6">All Categories</h2>

      <div className="grid grid-cols-3 px-6 mt-4 gap-3">
        {
            categories?.map((item, index)=><Link to="/categories" onClick={() => setCategory(item)} key={index} className="bg-tertiary rounded shadow-lg p-2">
            <div className="flex justify-center items-center ">
              <img width={50} src={lemon} alt="" />
            </div>
            <h5 className="text-center text-base text-primary ">{item}</h5>
          </Link>)
        }
      </div>
    </div>
  );
};

export default CategoryMobile;
