import React, { useState, useContext, useEffect } from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import apple from "../../assets/Red apple.png";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import DeleteIcon from "../Icons/DeleteIcon";
import Swal from "sweetalert2";
import { BsCartXFill } from "react-icons/bs";

const Cart = () => {
  const { cart, setCart, renderCart, setRenderCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleAddQuantity = (product) => {
    let quantity = Number(product?.quantity) + 1;
    const result = [];
    cart.filter((item) => {
      if (item?.id == product?.id) {
        {
          item.quantity =
            quantity === null || quantity === "" || isNaN(quantity)
              ? 1
              : quantity;
        }
      }
      result.push(item);
    });
    setCart(result);
    localStorage.setItem("cart", JSON.stringify(result));
  };

  const handleDecreaseQuantity = (product) => {
    let quantity =
      Number(product?.quantity > 1) && Number(product?.quantity) - 1;
    const result = [];
    cart.filter((item) => {
      if (item?.id == product?.id) {
        {
          item.quantity = quantity;
        }
      }
      result.push(item);
    });
    setCart(result);
    localStorage.setItem("cart", JSON.stringify(result));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setRenderCart(renderCart + 1);
  };

  function handleRemoveFromCart(product) {
    Swal.fire({
      title: "Are you sure? want to remove this item from the cart!",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Item removed from the cart!", "", "success");
        const filteredCart = cart?.filter((item) => item?.id != product?.id);
        setCart(filteredCart);
      }
    });
  }

  useEffect(() => {
    const totalPrice = cart?.reduce(
      (total, item) =>
        total + item?.price * Number(item.quantity ? item.quantity : 0),
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure? All items in cart will be deleted!!",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("All items in cart removed!", "", "success");
        localStorage.removeItem("cart");
        setCart([]);
      }
    });
  };

  return (
    <div className="drawer drawer-end z-20 ">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="cart-content"></div>
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>
        <div className="menu px-0 py-0 w-[80%] sm:w-80 min-h-full bg-base-200 text-base-content">
          <div className="h-[10vh] 2xl:h-[9vh] ">
            <div className="flex px-6 justify-between items-center">
              <h3 className=" text-lg py-2 text-primary font-semibold">
                Cart: <span className="ml-2">{cart?.length} Items</span>
              </h3>
              {cart?.length > 0 && (
                <button
                  onClick={handleClearCart}
                  className="text-secondary font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="flex mt-1">
              <span className=" flex-1 h-[3px] bg-primary "></span>
              <span className="flex-1 h-[3px] bg-[#dae1e7]  "></span>
            </div>
          </div>
          <div
            className={`${
              cart?.length > 0 ? "h-[67vh] 2xl:h-[71vh]" : "h-[89vh]"
            } overflow-y-scroll `}
          >
            {cart?.length === 0 && (
              <>
                <div className="px-2 py-3 text-primary text-base font-semibold ">
                  You have not added any product yet!!!
                </div>
                <div className="mt-[35vh]">
                  <BsCartXFill className="hover:text-secondary m-auto text-primary text-8xl " />
                </div>
              </>
            )}
            {cart?.map((item, index) => (
              <div key={index} className="px-2 py-3 border-b border-b-primary ">
                <div className="flex gap-2 items-center">
                  <div>
                    
                  </div>
                  <div className="flex gap-4 items-center mb-3 ">
                    <h4 className="text-primary text-base font-medium">
                      {item?.title}
                    </h4>
                    <h4 className="text-primary text-base font-semibold">
                      ${item?.price * Number(item.quantity ? item.quantity : 0)}
                    </h4>
                  </div>
                </div>
                <div className="flex mt-3 justify-between items-center  ">
                  <div className="flex items-center gap-3 ">
                    <button
                      disabled={
                        item?.quantity === null ||
                        item?.quantity === "" ||
                        isNaN(item?.quantity) ||
                        item.quantity <= 1
                      }
                      onClick={() => handleDecreaseQuantity(item)}
                      className="cursor-pointer btn btn-xs h-[30px] text-primary hover:bg-tertiary hover:border-primary border border-primary rounded full "
                    >
                      <MinusIcon />
                    </button>
                    <span className="text-xl font-semibold ">
                      <input
                        className="w-[60px] text-primary border rounded focus:outline-none border-primary text-center "
                        value={item?.quantity ? item.quantity : ""}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        type="text"
                      />
                    </span>
                    <a
                      onClick={() => handleAddQuantity(item)}
                      className="cursor-pointer btn btn-xs h-[30px] hover:bg-tertiary hover:border-primary text-primary border border-primary rounded full  "
                    >
                      <PlusIcon />
                    </a>
                  </div>
                  <div className="flex items-center mr-3">
                    <button onClick={() => handleRemoveFromCart(item)}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${
              cart?.length > 0 &&
              "h-[23vh] 2xl:h-[20vh] w-full pb-3 flex absolute bottom-0 "
            }`}
          >
            {cart?.length > 0 && (
              <div className="px-3 w-full mt-auto ">
                <label
                  onClick={() => navigate("/checkout")}
                  htmlFor="cart-drawer"
                  className=" hover:bg-primary btn w-full rounded-[64px] bg-primary text-white text-base px-4 py-1"
                >
                  Checkout Now ( ${total} )
                </label>

                <label
                  htmlFor="cart-drawer"
                  onClick={() => navigate("/customer-dashboard/cart")}
                  className="hover:border-primary hover:bg-transparent px-4 border border-primary bg-transparent text-base rounded-[64px] mt-3 btn text-primary w-full "
                >
                  View Cart
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
