import React, { useContext, useState } from "react";
import Categories from "./Components/Categories/Categories";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import ProductModal from "./Components/ProductModal/ProductModal";

import { DataContext } from "../../../../Common/context/DataProvider";
import Footer from "../../../../Common/Footer/Footer";

const ProductsContainer = () => {
  const { products } = useContext(DataContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fruits = products?.filter((pd) => pd?.category === "fruit");
  const vegetables = products?.filter((pd) => pd?.category === "vegetable");
  const groceryItems = products?.filter((pd) => pd?.category === "grocery");

  const openModal = (product) => {
    window.my_modal_3.showModal();
    setSelectedProduct(product);
  };
  return (
    <div className="section-container pt-10 pb-10 2md:pb-5">
      <div style={{ backgroundColor: "rgb(246, 249, 252)" }} className=" flex ">
        <Categories />
        <div className=" w-full 2md:w-[calc(100%-280px)] ">
          <ProductSlider
            products={fruits}
            openModal={openModal}
            title={"Fresh Fruits"}
            subTitle={"We provide fresh fruits for you."}
          />
          <ProductSlider
            products={vegetables}
            openModal={openModal}
            title={"Fresh Vegetables"}
            subTitle={"We provide fresh vegetables for you."}
          />
          <ProductSlider
            openModal={openModal}
            products={groceryItems}
            title={"Fresh Grocery"}
            subTitle={"We provide fresh groceries for you."}
          />
          
        </div>
      </div>
      {/* <ProductModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} /> */}
    </div>
  );
};

export default ProductsContainer;
