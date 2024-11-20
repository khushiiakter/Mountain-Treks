import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <nav className="px-6 bg-[#0F1035]  ">
        <Navbar></Navbar>
      </nav>
      <section className="min-h-screen">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
