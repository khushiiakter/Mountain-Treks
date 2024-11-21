import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center md:py-7  bg-[#0F1035] ">
      <div className="   w-full md:rounded-3xl md:max-w-lg shrink-0 md:border-4 border-[#DFF5FF] md:p-3 ">
        <div className="card bg-[#e1e4fa] border-[#0F1035] md:rounded-3xl border-4 rounded-none  gap-4 text-center py-6 md:px-4">
          <h2 className="text-4xl font-bold text-center">
            Welcome, {user?.displayName}.
          </h2>
          <div className="  rounded-lg">
            <img
              src={user?.photoURL}
              className="md:w-72 md:h-72 w-56 h-56 border-4 border-black rounded-full mb-4 mx-auto"
              alt=""
            />
          </div>

          <p className="md:text-4xl text-3xl font-bold">Name: {user?.displayName}</p>
          <p className="md:text-3xl text-xl font-semibold">Email: {user?.email}</p>
          <div>
            <Link to="/update-profile" className="btn text-white bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c]    rounded-xl">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
