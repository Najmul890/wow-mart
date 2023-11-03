/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import ProductSlider from "../../Pages/Home/Sections/ProductsContainer/Components/ProductSlider/ProductSlider";

const PageBottomProduct = () => {
  const { products } = useContext(DataContext);

  const fruits = products?.filter((pd) => pd?.category === "fruit");
  const vegetables = products?.filter((pd) => pd?.category === "vegetable");
  const groceryItems = products?.filter((pd) => pd?.category === "grocery");
  return (
    <div className="mt-[50px] 2md:mt-[100px]">
      <ProductSlider
        pdLeft={false}
        products={fruits}
        title={"Fresh Fruits"}
        subTitle={"We provide fresh fruits for you."}
      />
      <ProductSlider
        pdLeft={false}
        products={vegetables}
        title={"Fresh Vegetables"}
        subTitle={"We provide fresh vegetables for you."}
      />
      <ProductSlider
        pdLeft={false}
        products={groceryItems}
        title={"Fresh Grocery"}
        subTitle={"We provide fresh groceries for you."}
      />
    </div>
  );
};

export default PageBottomProduct;
