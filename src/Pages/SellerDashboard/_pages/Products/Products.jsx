import React, { useContext, useEffect } from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MenuIcon from "../../../../Common/Icons/MenuIcon";
import ArrowRight from "../../../../Common/Icons/RightArrow";

import productImg from "../../../../assets/Red apple.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../Common/context/DataProvider";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const Products = () => {
  const { user, sellerProducts } = useContext(DataContext);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <MobileSidebar />
      <div className="section-container flex gap-10 py-10">
        <Sidebar />
        <div className=" w-full 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl leading-none text-primary font-semibold ">
              All Products
            </h2>

            <label htmlFor="my-drawer">
              <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                <MenuIcon />
              </a>
            </label>
          </div>
          <div className="mt-10 text-primary">
            <div className="flex flex-col gap-4 ">
              <div className=" px-5  hidden 2md:flex items-center justify-between ">
                <div className="text-xl basis-[10%] font-semibold"></div>
                <div className="text-xl basis-[30%] font-semibold">Name</div>
                <div className="text-xl basis-[15%] font-semibold">Price</div>
                <div className="text-xl basis-[20%] font-semibold">
                  Special Price
                </div>
                <div className="text-xl basis-[15%] font-semibold">Status</div>
                <div className="basis-[10%]"></div>
              </div>
              {sellerProducts?.length > 0 &&
                sellerProducts.map((product, index) => (
                  <div
                    key={index}
                    className="shadow-lg px-3 2md:px-5 py-1.5  rounded-[40px] bg-tertiary hidden 2sm:flex justify-between items-center "
                  >
                    <div className=" basis-[10%] 2md:basis-[10%] font-semibold">
                      <div>
                        <img
                          className=""
                          width={40}
                          src={product.image?product.image:productImg}
                          alt="apple"
                        />
                      </div>
                    </div>
                    <div className=" basis-[45%] 2md:basis-[30%]  text-base font-medium  rounded-full ">
                      {product?.name}
                    </div>
                    <div className="text-base basis-[25%] 2md:basis-[15%] font-medium">
                      ${product?.price}
                    </div>
                    <div className="text-base basis-[15%] 2md:basis-[20%] font-medium">
                      ${product?.special_price}
                    </div>
                    <div className="text-base basis-[15%] 2md:basis-[15%] font-medium">
                      <div className="bg-secondary text-tertiary px-4 pt-1 pb-1.5 rounded-full inline ">
                        {product?.status}
                      </div>
                    </div>
                    <Link
                      to={`/seller-dashboard/product/edit/${product?.id}`}
                      className="basis-[5%] cursor-pointer flex justify-end 2md:basis-[10%]"
                    >
                      <ArrowRight />{" "}
                    </Link>
                  </div>
                ))}

              {sellerProducts?.length === 0 && "No Products Added"}

              {/* for mobile device */}
              {
                sellerProducts?.map((product,index)=><div key={index} className="shadow-lg px-3 2md:px-5 py-2  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
                <div className="flex justify-between items-center">
                  <div className="text-lg  font-semibold">
                    <div>
                      <img width={40} src={productImg} alt="apple" />
                    </div>
                  </div>
                  <div className="   text-base font-medium  rounded-full ">
                    {product?.name}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-base font-medium">${product?.price}</div>
                  <div className="text-base font-medium">${product?.special_price}</div>
                  <Link
                    to={`/seller-dashboard/product/edit/${product?.id}`}
                    className=" flex cursor-pointer justify-end "
                  >
                    <ArrowRight />{" "}
                  </Link>
                </div>
              </div>)
              }
              
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default Products;
