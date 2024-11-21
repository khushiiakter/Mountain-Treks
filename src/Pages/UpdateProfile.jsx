import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
    const navigate = useNavigate();

  const  handleUpdate = async (e) =>{
    e.preventDefault();
    
    const name = e.target.name.value;
    const photo = e.target.photo.value;
     if(user){
        try{
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });
            navigate("/user-profile")
        }catch (error){

        }
     }
  }
  return (
    <div className=" flex justify-center items-center md:py-7  bg-[#f2f4ff]">
      <div className="card bg-[#e3e5f3d5] w-full  md:max-w-lg shrink-0 md:border-2 border-[#556180] md:rounded-3xl rounded-none md:p-9 px-1 py-6">
        <h2 className="text-3xl font-semibold text-center">
          Update your profile
        </h2>
        <form onSubmit={handleUpdate} className="card-body   pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="url"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          
          
          <div className="form-control mt-3">
            <button className="btn btn-neutral rounded-full">Update</button>
          </div>
          
        

          
        </form>
        
      </div>
    </div>
  );
};

export default UpdateProfile;
