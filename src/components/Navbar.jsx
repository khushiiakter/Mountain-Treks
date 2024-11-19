import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import profile from "../assets/blank-profile-picture-973460_640.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li className="hover:bg-[#e1e4fa] hover:text-black hover:rounded-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-[#e1e4fa] hover:text-black hover:rounded-xl">
        <NavLink to="/update-profile">Update Profile</NavLink>{" "}
      </li>
      <li className="hover:bg-[#e1e4fa] hover:text-black hover:rounded-xl">
        <NavLink to="/user-profile">User Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar text-[#DCF2F1] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0F1035]  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl">Mountain Treks</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 ">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || {profile}}
                alt="Profile"
                className="border-2 border-[#e3e5f3d5] w-11 mr-2 rounded-full object-cover cursor-pointer ml-16"
              />
              <div className="absolute -right-4
               top-[60px] max-w-max bg-gray-800 text-white text-sm shadow-lg p-2 rounded hidden group-hover:block">
                {user.displayName || "User"}
              </div>
            </div>
            <Link onClick={logOut} className="btn bg-[#e1e4fa] text-[#0F1035] hover:bg-[#e3e5f3d5] ">
              Log Out
            </Link>
          </>
        ) : (
          <>
            
            <Link
              to="/auth/login"
              className="btn px-5 bg-[#e1e4fa] text-[#0F1035] transition duration-300 hover:bg-[#e3e5f3d5]"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// {user ? (
//   <>

//     <div className="relative group">
//       <img
//         src={user.photoURL || {profile}}
//         alt="Profile"
//         className="w-8 h-8 rounded-full object-cover cursor-pointer"
//       />
//       <div className="absolute left-0 w-auto bg-white text-gray-800 text-sm shadow-lg p-2 rounded hidden group-hover:block">
//         {user.displayName || "User"}
//       </div>
//     </div>
//      <Link  className="btn bg-[#e1e4fa] text-[#0F1035] hover:bg-[#e3e5f3d5] ">Log Out</Link>
//   </>
// ) : (
//   <Link to = "/auth/login" className="btn bg-[#e1e4fa] text-[#0F1035] transition duration-300 hover:bg-[#e3e5f3d5]">Login</Link>
//
// )}
