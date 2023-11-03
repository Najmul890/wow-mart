import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Common/MobileHeader/Icons/CartIcon";
import HeartIcon from "../../Common/Icons/HeartIcon";
import { Link, useNavigate, useParams } from "react-router-dom";
import InfoIcon from "../../Common/Icons/InfoIcon";
import { checkAddedToCart } from "../../Common/customFunctions/checkAddToCart";
import { DataContext } from "../../Common/context/DataProvider";
import StaticRating from "../../Common/components/StaticRating";
import QuantityContainer from "./components/QuantityContainer";
import Categories from "../Home/Sections/ProductsContainer/Components/Categories/Categories";
import { checkAddedToWishList } from "../../Common/customFunctions/checkAddedToWishList";
import HeartFill from "../../Common/Icons/HeartFill";
import Swal from "sweetalert2";
import PageBottom from "../../Common/PageBottom/PageBottom";
import PageBottomProduct from "../../Common/PageBottom/PageBottomProduct";

const Category = () => {
  const { user, cart, setCart, products, wishList, setWishList } =
    useContext(DataContext);
  const { query } = useParams();
  const navigate = useNavigate();

  const productsViaSearch = products?.filter((pd) =>
    pd?.title.toLowerCase().includes(query.trim().toLocaleLowerCase())
  );

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
    <div className="section-container min-h-screen pt-6 pb-10">
      <div className="flex ">
        <div className="">
          <Categories />
        </div>
        <div className="2md:w-[calc(100%-280px)] pl-0 2md:pl-7  " >
          <h3 className="text-3xl font-semibold text-primary ">
            Searched Result
          </h3>
          <div className="grid xl:grid-cols-5 2md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 gap-x-3 gap-y-5 mt-5 mb-10 2md:mb-0 ">
            {productsViaSearch?.map((item, index) => (
              <div key={index} className=" ">
                <div className="card overflow-hidden border rounded-lg relative product-card bg-base-100  ">
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
                      <img
                        className="p-0 w-full"
                        src={item?.img[0]}
                        alt="Shoes"
                      />
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
                      <span className="font-semibold text-xs leading-4">
                        FAM
                      </span>{" "}
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
            ))}
          </div>
          <PageBottomProduct/>
        </div>
      </div>
    </div>
  );
};

export default Category;
