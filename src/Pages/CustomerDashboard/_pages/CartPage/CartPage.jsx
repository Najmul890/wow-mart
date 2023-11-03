import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DataContext } from "../../../../Common/context/DataProvider";
import DeleteIcon from "../../../../Common/Icons/DeleteIcon";
import PlusIcon from "../../../../Common/Icons/PlusIcon";
import MinusIcon from "../../../../Common/Icons/MinusIcon";
import QuantityContainer from "../../../Home/Sections/ProductsContainer/Components/QuantityContainer/QuantityContainer";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const CartPage = () => {
  const { cart } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const totalPrice = cart?.reduce(
      (total, item) =>
        total + item?.price * Number(item.quantity ? item.quantity : 0),
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="section-container text-primary py-10 mb-10 2md:mb-0">
      <div className="mb-8 px-0 lg:px-5 flex justify-center text-center lg:text-start ">
        <ul className="steps ">
          <li className="step w-[60px] xs:w-[100px] step-primary">Cart </li>
          <li className="step step-primary">Details </li>
          <li className="step">Payment </li>
          <li className="step">Review </li>
        </ul>
      </div>
      <div className="flex">
        <div className="basis-[100%] 2sm:basis-[90%] 2md:basis-[75%] xl:basis-[50%] mx-auto">
          {cart?.map((item, index) => (
            <div key={index}>
              <div className="mb-6  px-5 py-1 hidden sm:flex  rounded-lg bg-tertiary shadow-md justify-between items-center ">
                <div className="flex gap-3 sm:gap-5 items-center ">
                  <div className="">
                    <img
                      className="w-[100px] sm:w-[150px]"
                      src={item?.img[0]}
                      alt={item?.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between ">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 ">
                        {item?.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 font-medium text-base items-center">
                      <span>
                        ${item?.price} x ${item?.quantity}
                      </span>
                      <span>=</span>
                      <span>${item?.price * item?.quantity}</span>
                    </div>
                  </div>
                </div>
                <QuantityContainer product={item} />
              </div>
              {/* cart item for mobile responsive */}
              <div className="mb-6  px-2 xs:px-5 py-4 flex sm:hidden  rounded-lg bg-tertiary shadow-md gap-2 xs:gap-4 items-center ">
                <div className="">
                  <img
                    className="w-[100px] xs:w-[130px] "
                    src={item?.img[0]}
                    alt={item?.title}
                  />
                </div>

                <div className="flex flex-col justify-between ">
                  <div className="flex flex-col justify-between ">
                    <div>
                      <h3 className="text-lg xs:text-xl font-semibold mb-1 xs:mb-3 ">
                        {item?.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 font-medium text-base items-center">
                      <span>
                        ${item?.price} x ${item?.quantity}
                      </span>
                      <span>=</span>
                      <span>${item?.price * item?.quantity}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <QuantityContainer product={item} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5 2md:mt-8 flex justify-between items-center">
            <div>
              <Link to="/checkout" className="btn hover:bg-primary btn-md capitalize main-btn">Checkout Now</Link>
            </div>
            <div className="text-xl shadow-lg bg-tertiary inline rounded-full px-4 py-2.5 font-semibold">
              Total: ${total}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <PageBottom />
      </div>
    </div>
  );
};

export default CartPage;
