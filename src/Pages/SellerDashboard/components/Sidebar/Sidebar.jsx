/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CartIcon from "../../../../Common/MobileHeader/Icons/CartIcon";
import AccountIcon from "../../../../Common/MobileHeader/Icons/AccountIcon";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../Common/context/DataProvider";
import SidebarHeart from "../../../../Common/Icons/SidebarHeart";
import SidebarLocation from "../../../../Common/Icons/SidebarLocation";
import ProductIcon from "../../../../Common/Icons/ProductIcon";
import AddIcon from "../../../../Common/Icons/AddIcon";
import DashboardIcon from "../../../../Common/Icons/DashboardIcon";

const Sidebar = () => {
  const {active, setActive} = useContext(DataContext);

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
        <Link onClick={()=>setActive("dashboard")} to="/seller-dashboard/dashboard" className={`flex gap-2 ${active==="dashboard"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <div className="pl-0.5"><DashboardIcon /></div>
          Dashboard
        </Link>
      </div>
      <div className=" px-5 py-2 mt-2">
        <Link onClick={()=>setActive("orders")} to="/seller-dashboard/orders" className={`flex gap-2 ${active==="orders"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <CartIcon />
          Orders <span className="font-semibold">(10)</span>
        </Link>
      </div>
      <div className=" px-5 py-2 mt-2">
        <Link onClick={()=>setActive("products")} to="/seller-dashboard/products" className={`flex gap-2 ${active==="products"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <ProductIcon/>
          Products 
        </Link>
      </div>
      <div className=" px-5 py-2 mt-2">
        <Link onClick={()=>setActive("add-product")} to="/seller-dashboard/add-product" className={`flex gap-2 ${active==="add-product"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center`}>
          <AddIcon/>
          Add Product
        </Link>
      </div>
      
      <div className="mt-2 py-2 px-5">
        <Link onClick={()=>setActive("profile setting")} to="/seller-dashboard/profile" className={`flex gap-2 ${active==="profile setting"?"text-secondary":"text-primary"} hover:text-secondary cursor-pointer items-center `}>
          <AccountIcon />
          Profile Setting
        </Link>
      </div>
      
    </div>
  );
};

export default Sidebar;
