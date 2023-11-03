import React, { useContext } from "react";
import fruits from "../../../../../../assets/fruits.png";
import AppleIcon from "./AppleIcon";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../../../Common/context/DataProvider";

const Categories = () => {
  const {categories, setCategory} = useContext(DataContext);
  return (
    <div className="bg-white w-[280px] h-[500px] sticky top-[15%] hidden 2md:block ">
      <h3 className="text-base px-3 py-2 text-primary font-semibold">Top Categories</h3>
      
      <div className="flex mt-1">
        <span className=" flex-1 h-[3px] bg-primary "></span>
        <span className="flex-1 h-[3px] bg-[#dae1e7]  "></span>
      </div>
      {
        categories.map((category, index)=><Link onClick={()=>setCategory(category)} key={index} to="/categories" className="flex gap-2 py-2 px-2 text-primary hover:text-secondary cursor-pointer items-center mt-2">
        <AppleIcon />
        {category}
      </Link>)
      }
      
    </div>
  );
};

export default Categories;
