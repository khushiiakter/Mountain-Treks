import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <div >
      {/* <nav className="px-6 bg-[#0F1035] ">
        <Navbar></Navbar>
      </nav> */}
      <section >
            <Outlet></Outlet>
      </section>
     
    </div>
  );
};

export default AuthLayouts;
