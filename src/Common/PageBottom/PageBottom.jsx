import React, { useContext } from "react";
import ProductSlider from "../../Pages/Home/Sections/ProductsContainer/Components/ProductSlider/ProductSlider";
import { DataContext } from "../context/DataProvider";
import Categories from "../../Pages/Home/Sections/ProductsContainer/Components/Categories/Categories";

const PageBottom = () => {
  const { products } = useContext(DataContext);

  const fruits = products?.filter((pd) => pd?.category === "fruit");
  const vegetables = products?.filter((pd) => pd?.category === "vegetable");
  const groceryItems = products?.filter((pd) => pd?.category === "grocery");
  return (
    <div className="mt-[50px] flex 2md:mt-[100px]">
      <Categories />
      <div className=" w-full 2md:w-[calc(100%-280px)] ">
        <ProductSlider
          products={fruits}
          title={"Fresh Fruits"}
          subTitle={"We provide fresh fruits for you."}
        />
        <ProductSlider
          products={vegetables}
          title={"Fresh Vegetables"}
          subTitle={"We provide fresh vegetables for you."}
        />
        <ProductSlider
          products={groceryItems}
          title={"Fresh Grocery"}
          subTitle={"We provide fresh groceries for you."}
        />
      </div>
    </div>
  );
};

export default PageBottom;
