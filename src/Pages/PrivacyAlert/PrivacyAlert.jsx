/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const PrivacyAlert = ({ setShowPrivacyAlert }) => {
  
  return (
    <div className="px-5 z-[1000] privacy-alert w-full">
      <div className="text-primary flex items-center w-full px-5 py-2 z-[1000] shadow-lg rounded-lg  ">
        <div className="bg-tertiary rounded-l-md py-3
         basis-[80%]">
          <div className="text-base font-medium text-center text-primary ">
            If you are a California resident, refer to section 12 for more
            information.
          </div>
        </div>

        <div onClick={() => {setShowPrivacyAlert(false), localStorage.setItem("new user", "false")}} className="bg-secondary cursor-pointer py-3 flex justify-center items-center basis-[10%]">
          <a className="">
            Accept
          </a>
        </div>
        <div onClick={() => {setShowPrivacyAlert(false), localStorage.setItem("new user", "false")}} className="bg-tertiary cursor-pointer rounded-r-md py-3 flex justify-center items-center basis-[10%]">
          <a className="">
            Decline
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAlert;
