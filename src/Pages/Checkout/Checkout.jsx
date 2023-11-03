import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Common/context/DataProvider";
import CartIcon from "../../Common/MobileHeader/Icons/CartIcon";
import PageBottom from "../../Common/PageBottom/PageBottom";

const Checkout = () => {
  const { cart } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart?.reduce(
      (total, item) =>
        total + item?.price * Number(item.quantity ? item.quantity : 0),
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="section-container mb-10 2md:mb-0 min-h-screen py-10 ">
      <div className="flex flex-col gap-10 lg:flex-row" >
        <div className="basis-[65%] p-5 shadow-lg rounded-lg bg-white ">
          <h3 className="text-2xl text-primary font-semibold ">
            Shipping Address
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2md:gap-6 ">
            <div className="mt-3">
              <label className="text-primary">Full Name</label> <br />
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Email Address</label> <br />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Phone Number</label> <br />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Area</label> <br />
              <input
                type="text"
                placeholder="Area"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Zip Code</label> <br />
              <input
                type="text"
                placeholder="Zip Code"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Region</label> <br />
              <input
                type="text"
                placeholder="Region"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3">
              <label className="text-primary">Address 1</label> <br />
              <input
                type="text"
                placeholder="Address 1"
                className="input input-bordered focus:outline-none text-primary mt-3 w-full "
              />
            </div>
            <div className="mt-3 pb-2">
              <label className="text-primary">Address 2</label> <br />
              <input
                type="text"
                placeholder="Address 2"
                className="input input-bordered text-primary focus:outline-none mt-3 w-full "
              />
            </div>
          </div>
        </div>
        <div className="basis-[35%] py-5 shadow-lg rounded-lg bg-white">
          <div className=" text-lg pb-2 flex items-center text-primary px-5 font-semibold">
            <CartIcon /> <span className="ml-3">{cart?.length} Items</span>
          </div>
          <div className="flex mt-1">
            <span className=" flex-1 h-[3px] bg-primary "></span>
            <span className="flex-1 h-[3px] bg-[#dae1e7]  "></span>
          </div>
          <div className="px-5 mt-4">
            {cart?.map((item, index) => (
              <div key={index} className="px-1 border-b border-b-primary ">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img width={50} src={item?.img[0]} alt={item?.title} />
                    <h4 className="text-primary text-base font-medium">
                      {item?.title}{" "}
                      <span className="ml-2">
                        x {item.quantity ? item.quantity : 0}
                      </span>
                    </h4>
                  </div>
                  <div className="">
                    <h4 className="text-primary text-base font-semibold">
                      ${item?.price * Number(item.quantity ? item.quantity : 0)}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mb-3 items-center mt-4">
              <div className="text-lg text-primary font-medium">Subtotal:</div>
              <div className="text-2xl text-primary font-semibold ">
                ${total}
              </div>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <div className="text-lg text-primary font-medium">Shipping:</div>
              <div className="text-2xl text-primary font-semibold ">$0</div>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <div className="text-lg text-primary font-medium">Tax:</div>
              <div className="text-2xl text-primary font-semibold ">$0</div>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <div className="text-lg text-primary font-medium">Discount:</div>
              <div className="text-2xl text-primary font-semibold ">$0</div>
            </div>
            <div className="flex justify-between mt-4 border-t pt-2 border-t-primary items-center">
              <div className="text-lg text-primary font-medium">Total:</div>
              <div className="text-2xl text-primary font-semibold ">
                ${total}
              </div>
            </div>
            <div className="mt-10">
              <button className="main-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-40px]">
        <PageBottom />
      </div>
    </div>
  );
};

export default Checkout;
