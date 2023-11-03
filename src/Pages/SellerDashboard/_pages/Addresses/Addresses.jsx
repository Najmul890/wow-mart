import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../../../Common/Icons/LocationIcon";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/MobileSidebar/Mobilesidebar";
import DeleteIcon from "../../../../Common/Icons/DeleteIcon";
import EditIcon from "../../../../Common/Icons/EditIcon";
import { FaRegEdit } from "react-icons/fa";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const Addresses = () => {
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full pl-0 2md:pl-7 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between">
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-4">
              <LocationIcon size="text-2xl xs:text-3xl" />
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                My Addresses
              </div>
            </div>
            <div>
              <button className=" btn btn-sm rounded-[30px] btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary ">
                Add New
              </button>
            </div>
          </div>
          <div className="shadow-lg px-3 2md:px-5 py-5 mt-10 text-primary  rounded-[30px] bg-tertiary hidden 2sm:flex justify-between items-center ">
            <div className="text-lg basis-[25%] 2md:basis-[15%] font-semibold">
              Office
            </div>
            <div className=" basis-[30%] 2md:basis-[40%]  text-base font-medium  rounded-full ">
              <div>8000 Evans Brooks, Lake Jo, Mongolia</div>
            </div>
            <div className="text-base basis-[25%] 2md:basis-[25%] font-medium">
              (213) 840-9416
            </div>
            <div className=" basis-[15%] flex items-center gap-4 2md:basis-[20%] font-medium">
              <DeleteIcon />
              <EditIcon />
            </div>
          </div>
          <div className="shadow-lg px-3 2md:px-5 py-5 mt-10 text-primary  rounded-[30px] bg-tertiary hidden 2sm:flex justify-between items-center ">
            <div className="text-lg basis-[25%] 2md:basis-[15%] font-semibold">
              Home
            </div>
            <div className=" basis-[30%] 2md:basis-[40%]  text-base font-medium  rounded-full ">
              <div>8000 Evans Brooks, Lake Jo, Mongolia</div>
            </div>
            <div className="text-base basis-[25%] 2md:basis-[25%] font-medium">
              (213) 840-9416
            </div>
            <div className=" basis-[15%] flex items-center gap-4 2md:basis-[20%] font-medium">
              <DeleteIcon />
              <EditIcon />
            </div>
          </div>
          <div className="shadow-lg px-3 2md:px-5 py-5 mt-10 text-primary  rounded-[30px] bg-tertiary hidden 2sm:flex justify-between items-center ">
            <div className="text-lg basis-[25%] 2md:basis-[15%] font-semibold">
              Shop
            </div>
            <div className=" basis-[30%] 2md:basis-[40%]  text-base font-medium  rounded-full ">
              <div>8000 Evans Brooks, Lake Jo, Mongolia</div>
            </div>
            <div className="text-base basis-[25%] 2md:basis-[25%] font-medium">
              (213) 840-9416
            </div>
            <div className=" basis-[15%] flex items-center gap-4 2md:basis-[20%] font-medium">
              <DeleteIcon />
              <EditIcon />
            </div>
          </div>
          {/* for mobile */}
          <div className="shadow-lg px-3 mt-7 2md:px-5 py-5 text-primary  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">Office</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">
                8000 Evans Brooks, Lake Jo, Mongolia
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base font-medium">(213) 840-9416</div>
              <div className="flex gap-3 items-center">
                <div>
                  <DeleteIcon />
                </div>
                <div>
                  <EditIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg px-3 mt-7 2md:px-5 py-5 text-primary  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">Home</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">
                8000 Evans Brooks, Lake Jo, Mongolia
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base font-medium">(213) 840-9416</div>
              <div className="flex gap-3 items-center">
                <div>
                  <DeleteIcon />
                </div>
                <div>
                  <EditIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg px-3 mt-7 2md:px-5 py-5 text-primary  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  ">
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">Shop</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base  font-semibold">
                8000 Evans Brooks, Lake Jo, Mongolia
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-base font-medium">(213) 840-9416</div>
              <div className="flex gap-3 items-center">
                <div>
                  <DeleteIcon />
                </div>
                <div>
                  <EditIcon/>
                </div>
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

export default Addresses;
