import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../components/DynamicTitle";

const MainLayouts = () => {
  return (
    <div>
      <DynamicTitle></DynamicTitle>

      <nav className="md:px-6 bg-[#0F1035]  -px-4">
        <Navbar></Navbar>
      </nav>
      <section className="">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MainLayouts;
