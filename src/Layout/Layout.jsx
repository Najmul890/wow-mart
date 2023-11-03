import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../Common/Header/Header";
import MobileHeader from "../Common/MobileHeader/MobileHeader";
import Footer from "../Common/Footer/Footer";
import PrivacyAlert from "../Pages/PrivacyAlert/PrivacyAlert";

const Layout = () => {
  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);
  const newUser = localStorage.getItem("new user");

  useEffect(()=>{
    if (!newUser) {
        setShowPrivacyAlert(true);
        localStorage.setItem("new user","true");
      }
  },[newUser])
  return (
    <div className="">
      <Header />
      <Outlet />
      <MobileHeader />
      <Footer />
      {showPrivacyAlert && (
        <PrivacyAlert setShowPrivacyAlert={setShowPrivacyAlert} />
      )}
    </div>
  );
};

export default Layout;
