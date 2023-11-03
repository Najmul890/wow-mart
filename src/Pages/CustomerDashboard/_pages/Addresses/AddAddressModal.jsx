/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../../../Common/context/DataProvider";
import Swal from "sweetalert2";

const AddAddressModal = () => {
  const { addresses, setAddresses, user } = useContext(DataContext);

  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dialogRef = useRef(null);

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (location) {
      const info = {};

      (info.id = addresses.length + 1),
        (info.user_id = user?.id),
        (info.location = location),
        (info.address = address),
        (info.phone = phone),
        setAddresses([...addresses, info]);

      dialogRef.current.close();
      Swal.fire("Address added successfully!", "", "success");

      setLocation("");
      setAddress("");
      setPhone("");
    }
  };


  return (
    <dialog id="add_address" ref={dialogRef} className="modal">
      <form onSubmit={handleAddProduct} className="modal-box text-primary">
        <h3 className="font-bold text-lg">Add Address</h3>
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
              Add Address
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

export default AddAddressModal;
