import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
         <Outlet />
      <Footer />
      </div>
  );
}

export default AppLayout;
