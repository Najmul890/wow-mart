import React from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountIcon from "../../../../Common/MobileHeader/Icons/AccountIcon";
import ProfileIcon from "../../../../Common/Icons/ProfileIcon";
import profile from "../../../../assets/ralph.png";
import { Link } from "react-router-dom";
import PageBottom from "../../../../Common/PageBottom/PageBottom";
import MenuIcon from "../../../../Common/Icons/MenuIcon";

const Profile = () => {
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full pl-0 2md:pl-7 2md:w-[calc(100%-280px)] ">
          <div className="hidden 2md:flex items-center justify-between">
            <div className="flex items-center gap-2 xs:gap-4">
              <ProfileIcon />
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                My Profile
              </div>
            </div>
            <div className="">
              <Link
                to="/customer-dashboard/profile/edit"
                className=" btn rounded-[30px] btn-sm btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
              >
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="flex 2md:hidden justify-between items-center">
            <div className="flex items-center gap-2 xs:gap-4">
              <ProfileIcon />
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                My Profile
              </div>
            </div>
            <div>
              <label htmlFor="my-drawer">
                <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                  <MenuIcon />
                </a>
              </label>
            </div>
          </div>
          <div className="mt-5 block 2md:hidden ">
            <Link
              to="/customer-dashboard/profile/edit"
              className=" btn rounded-[30px] btn-sm btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
            >
              Edit Profile
            </Link>
          </div>
          <div className="flex flex-col xl:flex-row gap-5 mt-10 ">
            <div className="shadow-lg p-5 flex basis-[100%] xl:basis-[40%] justify-between items-center rounded-lg bg-tertiary ">
              <div className="flex gap-3 items-center ">
                <div>
                  <img
                    className="w-[50px] h-[50px] xs:w-[70px] xs:h-[70px] rounded-full "
                    src={profile}
                    alt="user"
                  />
                </div>
                <div className="text-primary">
                  <h4 className="text-lg xs:text-xl font-semibold">
                    Mark Taylor
                  </h4>
                  <h5 className="text-base xs:text-lg mt-3 font-medium">
                    Balance{" "}
                    <span className="text-secondary font-semibold">$500</span>{" "}
                  </h5>
                </div>
              </div>
              <div className="text-primary tracking-wide text-sm xs:text-base font-medium ">
                SILVER USER
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 2sm:grid-cols-4 basis-[100%] xl:basis-[60%]">
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h4 className="text-secondary font-semibold text-xl">16</h4>
                <h5 className="text-primary text-center font-medium mt-3 text-base">
                  All Orders
                </h5>
              </div>
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h4 className="text-secondary font-semibold text-xl">02</h4>
                <h5 className="text-primary text-center font-medium mt-3 text-base">
                  Awaiting Payments
                </h5>
              </div>
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h4 className="text-secondary font-semibold text-xl">00</h4>
                <h5 className="text-primary text-center font-medium mt-3 text-base">
                  Awaiting Shipment
                </h5>
              </div>
              <div className="flex p-5 bg-tertiary flex-col shadow-lg rounded-lg justify-center items-center ">
                <h4 className="text-secondary font-semibold text-xl">01</h4>
                <h5 className="text-primary text-center font-medium mt-3 text-base">
                  Awaiting Delivery
                </h5>
              </div>
            </div>
          </div>
          <div className="shadow-lg mt-10 rounded-lg bg-tertiary p-5 ">
            <div className="grid grid-cols-1 min-[370px]:grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-primary">
                <h5 className="text-base font-medium">First Name</h5>
                <h5 className="text-lg font-semibold">Mark</h5>
              </div>
              <div className="text-primary">
                <h5 className="text-base font-medium">Last Name</h5>
                <h5 className="text-lg font-semibold">Taylor</h5>
              </div>
              <div className="text-primary">
                <h5 className="text-base font-medium">Email</h5>
                <h5 className="text-lg font-semibold">test@gmail.com</h5>
              </div>
              <div className="text-primary">
                <h5 className="text-base font-medium">Phone</h5>
                <h5 className="text-lg font-semibold">7777777</h5>
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

export default Profile;
