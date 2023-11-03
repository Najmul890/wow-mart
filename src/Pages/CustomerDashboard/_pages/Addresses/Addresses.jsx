import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../../../Common/Icons/LocationIcon";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/MobileSidebar/Mobilesidebar";
import DeleteIcon from "../../../../Common/Icons/DeleteIcon";
import EditIcon from "../../../../Common/Icons/EditIcon";
import { FaRegEdit } from "react-icons/fa";
import PageBottom from "../../../../Common/PageBottom/PageBottom";
import AddAddressModal from "./AddAddressModal";
import { DataContext } from "../../../../Common/context/DataProvider";
import Swal from "sweetalert2";
import EditAddressModal from "./EditAddressModal";
import MenuIcon from "../../../../Common/Icons/MenuIcon";

const Addresses = () => {
  const { addresses, setAddresses, user } = useContext(DataContext);

  const [addInfo, setAddInfo] = useState(null);

  const handleDeleteAddress = (id) => {
    Swal.fire({
      title: "Are you sure? Want to delete this Address!!",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredAddresses = addresses?.filter((info) => info.id !== id);
        setAddresses(filteredAddresses);
        Swal.fire("Address deleted successfully!", "", "success");
      }
    });
  };

  console.log("add info", addInfo);
  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full pl-0 2md:pl-7 2md:w-[calc(100%-280px)] ">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 xs:gap-2 sm:gap-4">
                <div>
                  <LocationIcon size="text-2xl xs:text-3xl" />
                </div>
                <div className="text-2xl mt-[-3px] xs:text-3xl text-primary font-semibold ">
                  My Addresses
                </div>
              </div>
              <div className="block 2md:hidden">
                <label htmlFor="my-drawer">
                  <a className="d-block 2md:hidden text-primary hover:text-secondary cursor-pointer ">
                    <MenuIcon />
                  </a>
                </label>
              </div>
              <div className="hidden 2md:block">
                <button
                  onClick={() =>
                    document.getElementById("add_address").showModal()
                  }
                  className=" btn btn-sm rounded-[30px] btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
                >
                  Add New
                </button>
              </div>
            </div>

            <div className="block mt-5 2md:hidden">
              <button
                onClick={() =>
                  document.getElementById("add_address").showModal()
                }
                className=" btn btn-sm rounded-[30px] btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
              >
                Add New
              </button>
            </div>
          </div>

          {addresses?.map((info, index) => (
            <div
              key={index}
              className="shadow-lg px-3 2md:px-5 py-3 mb-6 text-primary  rounded-[30px] bg-tertiary hidden 2sm:flex justify-between items-center "
            >
              <div className="text-lg basis-[25%] 2md:basis-[25%] font-semibold">
                {info?.location}
              </div>
              <div className=" basis-[30%] 2md:basis-[40%]  text-base font-medium  rounded-full ">
                <div>{info?.address}</div>
              </div>
              <div className="text-base basis-[25%] 2md:basis-[15%] font-medium">
                {info?.phone}
              </div>
              <div className=" basis-[15%] flex items-center gap-4 2md:basis-[20%] font-medium">
                <div
                  onClick={() => handleDeleteAddress(info?.id)}
                  className="cursor-pointer"
                >
                  <DeleteIcon />
                </div>
                <div
                  onClick={() => {
                    setAddInfo(info);
                    document.getElementById("edit_address").showModal();
                  }}
                  className="cursor-pointer"
                >
                  <EditIcon />
                </div>
              </div>
            </div>
          ))}

          {/* for mobile */}
          {addresses?.map((info, index) => (
            <div
              key={index}
              className="shadow-lg px-3 mt-7 2md:px-5 py-5 text-primary  rounded-lg bg-tertiary flex 2sm:hidden flex-col gap-5  "
            >
              <div className="flex justify-between items-center">
                <div className="text-base  font-semibold">{info?.location}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-base  font-semibold">{info?.address}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-base font-medium">{info?.phone}</div>
                <div className="flex gap-3 items-center">
                  <div
                    onClick={() => handleDeleteAddress(info?.id)}
                    className="cursor-pointer"
                  >
                    <DeleteIcon />
                  </div>
                  <div
                    onClick={() => {
                      setAddInfo(info);
                      document.getElementById("edit_address").showModal();
                    }}
                    className="cursor-pointer"
                  >
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
      <AddAddressModal />
      <EditAddressModal addInfo={addInfo} />
    </>
  );
};

export default Addresses;
