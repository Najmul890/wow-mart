/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../../Common/context/DataProvider";
import Swal from "sweetalert2";

const EditAddressModal = ({ addInfo }) => {
  const { addresses, setAddresses, user } = useContext(DataContext);
  console.log("add info2", addInfo);

  const [location, setLocation] = useState(addInfo?.location);
  const [address, setAddress] = useState(addInfo?.address);
  const [phone, setPhone] = useState(addInfo?.phone);
  const dialogRef = useRef(null);

  useEffect(() => {
    setLocation(addInfo?.location);
    setAddress(addInfo?.address);
    setPhone(addInfo?.phone);
  }, [addInfo]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedInfos = [...addresses];

    const infoIndex = updatedInfos.findIndex(
      (info) => info.id === addInfo?.id
    );

    if (infoIndex !== -1) {
      const updateInfo = {
        ...updatedInfos[infoIndex],
        location: location,
        address: address,
        phone: phone,
      };

      updatedInfos[infoIndex] = updateInfo;

      setAddresses(updatedInfos);

      dialogRef.current.close();
      Swal.fire("Address updated successfully!", "", "success");

      setLocation("");
      setAddress("");
      setPhone("");
    }
  };

  return (
    <dialog id="edit_address" ref={dialogRef} className="modal">
      <form onSubmit={handleUpdateProduct} className="modal-box text-primary">
        <h3 className="font-bold text-lg">Update Address</h3>
        <div className="grid grid-cols-1 ">
          <div className="mt-3">
            <label className="text-primary">Location</label> <br />
            <input
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              placeholder="Enter Location"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Address</label> <br />
            <input
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              placeholder="Enter Address"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full "
            />
          </div>
          <div className="mt-3">
            <label className="text-primary">Phone</label> <br />
            <input
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              placeholder="Enter Phone"
              className="input input-bordered focus:outline-none text-primary mt-3 w-full "
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <button
              type="submit"
              className=" mt-4 capitalize hover:bg-primary main-btn"
            >
              Update Address
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default EditAddressModal;
