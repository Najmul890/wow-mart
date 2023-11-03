/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductsSlider.css";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { DataContext } from "../../../../../../Common/context/DataProvider";
import { checkAddedToCart } from "../../../../../../Common/customFunctions/checkAddToCart";
import InfoIcon from "../../../../../../Common/Icons/InfoIcon";
import HeartIcon from "../../../../../../Common/Icons/HeartIcon";
import QuantityContainer from "../QuantityContainer/QuantityContainer";
import StaticRating from "../../../../../../Common/components/StaticRating";
import { checkAddedToWishList } from "../../../../../../Common/customFunctions/checkAddedToWishList";
import HeartFill from "../../../../../../Common/Icons/HeartFill";
import Swal from "sweetalert2";

const ProductSlider = ({ products, title, pdLeft, subTitle }) => {
  const { user, cart, setCart, wishList, setWishList } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    product.quantity = 1;
    setCart([...cart, product]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToWishList = (item) => {
    if (user) {
      setWishList([...wishList, item]);
      Swal.fire({
        icon: "success",
        title: "Added to Your Wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      navigate("/login");
    }
  };

  const removeFromWishList = (item) => {
    if (user) {
      const filteredItems = wishList?.filter((pd) => pd.id != item?.id);
      setWishList(filteredItems);
      Swal.fire({
        icon: "success",
        title: "Removed from Your Wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={`px-0 ${pdLeft!==false && "2md:pl-10"} mb-10`}>
      <h3 className="text-3xl text-primary ">{title}</h3>
      <h5 className="text-base mt-4 mb-5 text-primary">{subTitle}</h5>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        onReachEnd={() => {
          console.log("end of list");
        }}
        spaceBetween={10}
        navigation={true}
        pagination={false}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          501: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" ">
              <div className="card overflow-hidden border rounded-lg h-full relative product-card bg-base-100  ">
                <div className="absolute product-heart right-3 block 2md:hidden top-3">
                  <Link to={`/product/details/${item?.id}`}>
                    <InfoIcon />
                  </Link>
                </div>
                {!checkAddedToWishList(wishList, item) ? (
                  <div
                    onClick={() => addToWishList(item)}
                    className="absolute cursor-pointer product-heart right-3 block 2md:hidden top-10 "
                  >
                    <HeartIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => removeFromWishList(item)}
                    className="absolute cursor-pointer product-heart right-3 block 2md:hidden top-10 "
                  >
                    <HeartFill />
                  </div>
                )}
                <div className="w-full">
                  <Link to={`/product/details/${item?.id}`}>
                    <img className="p-0 w-full" src={item?.img[0]} alt={item?.img[0]} />
                  </Link>
                </div>
                <div className="card-body px-3 pt-0 pb-3 flex text-primary gap-0 flex-col mt-auto">
                  <div className="flex justify-between items-center ">
                    <div>
                      <Link to={`/product/details/${item?.id}`}>
                        <h2
                          title={item?.title}
                          className="font-semibold text-lg text-primary"
                        >
                          {item?.title.slice(0, 18)}
                          {item?.title.length > 17 && "..."}
                        </h2>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-xs font-semibold leading-4 ">
                      ${item?.price}
                    </div>

                    <div className="flex items-center ">
                      <StaticRating rating={item?.rating} />
                      <div className="ml-1 flex items-center text-primary text-xs ">
                        (1k+)
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center ">
                    <div className="text-xs text-secondary mt-1 leading-4 ">
                      <span className="italic">$10</span> (12%off)
                    </div>
                    <div className="text-xs">20k+ sold</div>
                  </div>
                  <div className="text-secondary">
                    <span className="font-semibold text-xs leading-4">FAM</span>{" "}
                    Members
                  </div>

                  <div className="h-[40px]">
                    {checkAddedToCart(cart, item) ? (
                      <div className="mt-2 pb-[.25rem]">
                        <QuantityContainer
                          product={item}
                          position="justify-center"
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full main-btn mt-2 card-btn-common "
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default ProductSlider;
