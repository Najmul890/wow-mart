import React, { useContext, useState, useEffect } from "react";
import "./MobileHeader.css";
import HomeIcon from "./Icons/HomeIcon";
import CategoryIcon from "./Icons/CategoryIcon";
import CartIcon from "./Icons/CartIcon";
import AccountIcon from "./Icons/AccountIcon";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import LoginIcon from "../Icons/LoginIcon";

const MobileHeader = () => {
  const { cart, user, setUser } = useContext(DataContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className=" fixed mobile-header shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-tertiary z-10 bottom-0 left-0 right-0 py-3 flex  font-medium justify-between section-container 2md:hidden ">
      <Link
        to="/"
        className="flex gap-1 text-primary hover:text-secondary  flex-col items-center "
      >
        <HomeIcon />
        <span className="text-sm">Home</span>
      </Link>
      <Link
        to="/category-mobile"
        className="flex gap-1 text-primary hover:text-secondary  flex-col items-center "
      >
        <CategoryIcon />
        <span className="text-sm">Category</span>
      </Link>
      <label
        htmlFor="cart-drawer"
        className="flex gap-1 text-primary relative hover:text-secondary  flex-col items-center "
      >
        <CartIcon />
        <div className="flex justify-center items-center bg-primary text-sm text-tertiary absolute top-[-10px] left-5 px-1.5 rounded-full ">
          {cart?.length}
        </div>
        <span className="text-sm">Cart</span>
      </label>
      {user?.name ? (
        // <Link
        //   to="/customer-dashboard/orders"
        //   className="flex gap-1 text-primary hover:text-secondary  flex-col items-center "
        // >
        //   <AccountIcon />
        //   <span className="text-sm">Account</span>
        // </Link>
        <div className=" dropdown dropdown-top flex gap-1 text-primary hover:text-secondary  flex-col items-center ">
          <div>
            <label className="hover:text-secondary cursor-pointer" tabIndex={0}>
              <AccountIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[150] menu py-2 px-1 mt-4 ml-[-70px] shadow bg-base-100 border w-[120px] rounded-box "
            >
              <li>
                <Link
                  to="/customer-dashboard/orders"
                  className="text-primary"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <div
                  onClick={handleLogout}
                  className="text-primary cursor-pointer"
                >
                  Logout
                </div>
              </li>
            </ul>
          </div>
          <span className="text-sm">Profile</span>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex gap-1 text-primary hover:text-secondary  flex-col items-center "
        >
          <LoginIcon />
          <span className="text-sm">Login</span>
        </Link>
      )}
    </div>
  );
};

export default MobileHeader;
