import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import lemon from "../../assets/lime.png";
import LeftArrow from "../../Common/Icons/LeftArrow";
import orange from "../../assets/Orange.png";
import { DataContext } from "../../Common/context/DataProvider";
import { checkAddedToCart } from "../../Common/customFunctions/checkAddToCart";
import Review from "./components/Review/Review";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import QuantityContainer from "../Home/Sections/ProductsContainer/Components/QuantityContainer/QuantityContainer";
import Swal from "sweetalert2";
import { checkAddedToWishList } from "../../Common/customFunctions/checkAddedToWishList";
import HeartIcon from "../../Common/Icons/HeartIcon";
import HeartFill from "../../Common/Icons/HeartFill";
import { BiArrowBack } from "react-icons/bi";
import StaticRating from "../../Common/components/StaticRating";
import PageBottom from "../../Common/PageBottom/PageBottom";

const ProductDetails = () => {
  const { id } = useParams();
  const { user, cart, setCart, products, wishList, setWishList } =
    useContext(DataContext);
  const navigate = useNavigate();

  const product = products?.find((pd) => pd?.id == id);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddToCart = (product) => {
    product.quantity = 1;
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.img[0]);
    }
  }, [product]);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const checkReviewed = (pd, us) => {
    const res = pd?.reviews.find((p) => p?.user === us?.name);
    return res;
  };

  return (
    <div className="section-container py-5 mb-[60px] 2md:mb-0 ">
      <div
        onClick={()=>navigate(-1)}
        className="text-primary cursor-pointer mb-4 inline-block items-center hover:text-tertiary "
      >
        <div className="flex gap-1 border  hover:bg-primary hover:text-tertiary bg-[#dfe6e9] pl-2 pr-3 py-0.5 rounded-full items-center ">
          <span className="hover:text-tertiary">
            <BiArrowBack className="text-xl " />
          </span>{" "}
          <span className="text-base font-bold ">Back</span>
        </div>
      </div>

      <div className="flex gap-0 flex-col 2md:flex-row 2md:gap-5 mx-auto ">
        <div className=" basis-full 2md:mx-0 relative 2md:basis-1/2">
          <img
            className=" box-border w-full m-auto xs:w-3/4 sm:w-1/2 "
            src={selectedImage}
            alt={product?.title}
          />
          <div className="absolute top-0 right-5 2md:right-12 lg:right-[100px] xl: ">
            {!checkAddedToWishList(wishList, product) ? (
              <div
                onClick={() => addToWishList(product)}
                className=" cursor-pointer  "
              >
                <HeartIcon />
              </div>
            ) : (
              <div
                onClick={() => removeFromWishList(product)}
                className=" cursor-pointer  "
              >
                <HeartFill />
              </div>
            )}
          </div>
        </div>
        <div className="flex 2md:hidden mx-auto  my-6 gap-5">
          {product?.img?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className={`border ${
                selectedImage === item && "border-primary p-1"
              } rounded-xl`}
            >
              <img width={70} height={70} src={item} alt="" />
            </div>
          ))}
        </div>
        <div className="pt-0 basis-full 2md:basis-1/2 mt-6 2md:mt-0 pb-[30px]  text-primary">
          <div className="flex gap-10 sm:gap-0 flex-col sm:flex-row ">
            <div className=" basis-full sm:basis-[40%]">
              <h3 className="font-semibold leading-none text-2xl mb-3">
                {product?.title.slice(0, 18)}
                {product?.title.length > 17 && "..."}
              </h3>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked={product?.rating === 1}
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked={product?.rating === 2}
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked={product?.rating === 3}
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked={product?.rating === 4}
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked={product?.rating === 5}
                />
                <div className="ml-3 flex items-center text-primary text-xs ">
                  (1k+)
                </div>
              </div>
              <h5 className="text-lg mb-2">Brand: Fresh</h5>

              <h4 className="text-5xl flex items-center mt-3 font-semibold ">
                ${product?.price}
                <span className="text-xs ml-3">20k+ sold</span>
              </h4>
              <div className="text-xl mt-3 font-medium text-secondary ">
                <span className="italic">${product?.price}</span> (12%off)
              </div>
              <div className="mb-4 text-secondary ">
                <span className="font-semibold">FAM</span> Members
              </div>
              {checkAddedToCart(cart, product) ? (
                <div className="mt-5">
                  <QuantityContainer product={product} />
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="main-btn card-btn-common "
                >
                  Add
                </button>
              )}
            </div>
            <div className=" basis-full sm:basis-[60%]">
              <h3 className="text-2xl leading-none font-semibold">
                Product Description
              </h3>
              <div className="mt-3">
                <p>Fresh Product</p>
                <p>Very Healthy</p>
                <p>Fresh Product</p>
                <p>Very Healthy</p>
                <p>Fresh Product</p>
                <p>Very Healthy</p>
                <p>Fresh Product</p>
                <p>Very Healthy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image slider */}
      <div className="hidden 2md:flex mt-2 gap-5">
        {product?.img?.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item)}
            className={`border ${
              selectedImage === item && "border-primary p-1"
            } rounded-xl`}
          >
            <img width={70} height={70} src={item} alt="" />
          </div>
        ))}
      </div>
      <div className="mt-3 2md:mt-10 flex flex-col 2md:flex-row gap-5">
        <Review product={product} />
        {checkReviewed(product, user) ? (
          <div className="flex-1 py-2 text-primary">
            <h3 className=" text-lg py-2 text-primary font-semibold">Your Rating for this product is:</h3>
            <StaticRating rating={checkReviewed(product, user)?.rating} />
          </div>
        ) : (
          <ReviewForm product={product} />
        )}
      </div>
      <div className="mt-6">
        <PageBottom/>
      </div>
    </div>
  );
};

export default ProductDetails;
