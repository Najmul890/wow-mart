import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Common/context/DataProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import InfoIcon from "../../Common/Icons/InfoIcon";
import { checkAddedToWishList } from "../../Common/customFunctions/checkAddedToWishList";
import HeartIcon from "../../Common/Icons/HeartIcon";
import HeartFill from "../../Common/Icons/HeartFill";
import StaticRating from "../../Common/components/StaticRating";
import { checkAddedToCart } from "../../Common/customFunctions/checkAddToCart";
import QuantityContainer from "../Category/components/QuantityContainer";
import AppleIcon from "../Home/Sections/ProductsContainer/Components/Categories/AppleIcon";
import ProductSlider from "../Home/Sections/ProductsContainer/Components/ProductSlider/ProductSlider";
import PageBottom from "../../Common/PageBottom/PageBottom";
import PageBottomProduct from "../../Common/PageBottom/PageBottomProduct";

const Categories = () => {
  const {
    user,
    cart,
    categories,
    category,
    setCart,
    products,
    wishList,
    setWishList,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(category);

  let items = [];
  const productsViaCategory = products.filter(
    (pd) => pd.category === selectedCategory?.split(" ")[1].toLowerCase()
  );

  if (productsViaCategory?.length > 0) {
    items = productsViaCategory;
  } else {
    items = products;
  }

  // console.log(selectedCategory.split(" ")[1].toLowerCase());

  console.log(productsViaCategory);
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

  console.log(items);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  return (
    <div className="section-container min-h-screen pt-6 pb-10">
      <div className="flex ">
        <div className="">
          <div className="bg-white w-[280px] h-[500px] sticky top-[15%] hidden 2md:block ">
            <h3 className="text-base px-3 py-2 text-primary font-semibold">
              Top Categories
            </h3>

            <div className="flex mt-1">
              <span className=" flex-1 h-[3px] bg-primary "></span>
              <span className="flex-1 h-[3px] bg-[#dae1e7]  "></span>
            </div>
            {categories.map((item, index) => (
              <div
                onClick={() => setSelectedCategory(item)}
                key={index}
                className={`flex gap-2 py-2 px-2 ${
                  item === selectedCategory ? "text-secondary" : "text-primary"
                } hover:text-secondary cursor-pointer items-center mt-2`}
              >
                <AppleIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="2md:w-[calc(100%-280px)] pl-0 2md:pl-7  ">
          <h3 className="text-xl 2sm:text-3xl font-semibold text-primary ">
            All Items of{" "}
            <span className="text-secondary"> {selectedCategory} </span>{" "}
            category
          </h3>
          <div className="grid xl:grid-cols-5 2md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 gap-x-3 gap-y-5 mt-5 mb-10 2md:mb-0 ">
            {items?.map((item, index) => (
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
          <div className="hidden 2md:block">
            <PageBottomProduct />
          </div>
        </div>
      </div>
      <div className="block 2md:hidden">
        <PageBottomProduct />
      </div>
    </div>
  );
};

export default Categories;
