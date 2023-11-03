import React, { useContext, useEffect } from "react";
import MenuIcon from "../../../../Common/Icons/MenuIcon";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/MobileSidebar/Mobilesidebar";
import { DataContext } from "../../../../Common/context/DataProvider";
import StaticRating from "../../../../Common/components/StaticRating";
import { Link, useNavigate } from "react-router-dom";
import HeartIcon from "../../../../Common/Icons/HeartIcon";
import InfoIcon from "../../../../Common/Icons/InfoIcon";
import { checkAddedToCart } from "../../../../Common/customFunctions/checkAddToCart";
import QuantityContainer from "../../../Category/components/QuantityContainer";
import Swal from "sweetalert2";
import { checkAddedToWishList } from "../../../../Common/customFunctions/checkAddedToWishList";
import HeartFill from "../../../../Common/Icons/HeartFill";
import DeleteIcon from "../../../../Common/Icons/DeleteIcon";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const Wishlist = () => {
  const { user, wishList, setWishList, cart, setCart } =
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

  const handleClearAllWishlist = () => {
    Swal.fire({
      title: "Are you sure? All items in wishlist will be deleted!!",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setWishList([]);
        Swal.fire("All items in wishlist removed!", "", "success");
      }
    });
  };

  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between items-center pl-0 2md:pl-7">
            <div className="flex gap-3 2md:gap-10 items-center ">
              <div>
                <h2 className="text-2xl xs:text-3xl text-primary font-semibold ">
                  My Wishlist ({wishList?.length})
                </h2>
              </div>
              {wishList?.length > 0 && (
                <div
                  onClick={handleClearAllWishlist}
                  className="mt-1 cursor-pointer"
                >
                  <DeleteIcon title="Clear Your Wishlist" />
                </div>
              )}
            </div>
            <label htmlFor="my-drawer">
              <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                <MenuIcon />
              </a>
            </label>
          </div>
          <div className=" pl-0 2md:pl-7  grid xl:grid-cols-5 2md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 gap-x-3 gap-y-5 mt-5 mb-10 2md:mb-0">
            {wishList?.map((item, index) => (
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
                      <img className="p-0 w-full" src={item?.img[0]} alt="Shoes" />
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
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default Wishlist;
