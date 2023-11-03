/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MenuIcon from "../../Common/Icons/MenuIcon";
import MobileSidebar from "./components/MobileSidebar/Mobilesidebar";
import ArrowRight from "../../Common/Icons/RightArrow";
import PageBottom from "../../Common/PageBottom/PageBottom";

const SellerDashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex gap-10 py-10">
        <Sidebar />
        <div className=" w-full 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl leading-none text-primary font-semibold ">Dashboard</h2>

            <label htmlFor="my-drawer">
              <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                <MenuIcon />
              </a>
            </label>
          </div>
          <div className="mt-10 text-primary">
            <div className="grid grid-cols-1 gap-4 2sm:grid-cols-3">
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h3 className="text-primary text-center font-semibold mt-3 text-xl">
                  Earnings
                </h3>
                <h4 className="text-secondary mt-3 font-bold text-3xl">
                  $1600
                </h4>
                <h5 className="text-primary text-center text-sm font-medium mt-3 ">
                  after associated vendor fees
                </h5>
              </div>
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h3 className="text-primary text-center font-semibold mt-3 text-xl">
                  Your Balance
                </h3>
                <h4 className="text-secondary mt-3 font-bold text-3xl">
                  $5600
                </h4>
                <h5 className="text-primary text-center text-sm font-medium mt-3 ">
                  Will be processed on Feb 15, 2024
                </h5>
              </div>
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h3 className="text-primary text-center font-semibold mt-3 text-xl">
                  Pending Orders
                </h3>
                <h4 className="text-secondary mt-3 font-bold text-3xl">08</h4>
                <h5 className="text-primary text-center text-sm font-medium mt-3 ">
                  7/3/2020 - 8/1/2020
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default SellerDashboard;
