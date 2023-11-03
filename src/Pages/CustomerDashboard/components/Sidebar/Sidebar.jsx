import React, { useContext, useState } from "react";
import AppleIcon from "../../../Home/Sections/ProductsContainer/Components/Categories/AppleIcon";
import HeartIcon from "../../../../Common/Icons/HeartIcon";
import LocationIcon from "../../../../Common/Icons/LocationIcon";
import CartIcon from "../../../../Common/MobileHeader/Icons/CartIcon";
import AccountIcon from "../../../../Common/MobileHeader/Icons/AccountIcon";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../Common/context/DataProvider";
import SidebarHeart from "../../../../Common/Icons/SidebarHeart";
import SidebarLocation from "../../../../Common/Icons/SidebarLocation";

const Sidebar = () => {
  const {wishList, active, setActive} = useContext(DataContext);

  return (
    <div className="bg-white shadow-lg rounded-lg w-[280px] h-[500px] sticky top-[15%] hidden 2md:block ">
      <h3 className="text-base px-6 py-2 text-primary font-semibold">
        Dashboard
      </h3>
      <div className="flex mt-1">
        <span className=" flex-1 h-[3px] bg-primary "></span>
        <span className="flex-1 h-[3px] bg-[#dae1e7]  "></span>
      </div>
      <div className=" px-5 py-2 mt-2">
        <Link onClick={()=>setActive("orders")} to="/customer-dashboard/orders" className={`flex gap-2 ${active==="orders"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <CartIcon />
          Orders <span className="font-semibold">(10)</span>
        </Link>
      </div>
      <div className=" py-2 px-5 mt-2 ">
        <Link onClick={()=>setActive("wishlist")} to="/customer-dashboard/wishlist" className={`flex gap-2 ${active==="wishlist"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <SidebarHeart />
          <span className="mt-[-2px]">Wishlist <span className="font-semibold">({wishList?.length})</span></span>
        </Link>
      </div>
      <div className="mt-2 py-2 px-5">
        <Link onClick={()=>setActive("profile setting")} to="/customer-dashboard/profile" className={`flex gap-2 ${active==="profile setting"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center `}>
          <AccountIcon />
          Profile Setting
        </Link>
      </div>
      <div className="mt-2 py-2 px-5">
        <Link onClick={()=>setActive("addresses")} to="/customer-dashboard/addresses" className={`flex gap-2 ${active==="addresses"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <SidebarLocation />
          Addresses
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
