import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <nav className="px-6 bg-[#0F1035]  ">
        <Navbar></Navbar>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayouts;
