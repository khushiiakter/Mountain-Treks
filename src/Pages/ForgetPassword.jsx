import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
    const {  auth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const emailRef = useRef();

  const handleResetPassword = async (e) =>{
    e.preventDefault();
    
    const email = emailRef.current.value.trim();
    if(!email){
        toast.error("Please provide a valid email address.");
        return;
    }
    try {
       await sendPasswordResetEmail(auth, email);
        
        toast.success("Reset email sent, please check your email.")
        setTimeout(()=>{
            window.open("https://mail.google.com", "_blank"); 
        }, 2000);
        
    }catch(error){
        toast.error("Failed to send reset email. Please try again.")
    }
    
  }
  return (
    <div className=" flex justify-center items-center md:py-7  bg-[#f2f4ff]">
      <div className="card bg-[#e3e5f3d5]  w-full  md:max-w-lg shrink-0 md:border-2 border-[#556180] md:rounded-3xl rounded-none md:p-9 px-1 py-6">
        <h2 className="text-3xl font-semibold text-center">
          Forgot Password
        </h2>
        <p>Enter Your email address to reset your password.</p>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
            
              required
            />
          </div>
         
          <div className="form-control mt-3">
            <button type="submit" className="btn btn-neutral rounded-full">Reset Password</button>
          </div>

          
        </form>
        
      </div>
    </div>
  );
};

export default ForgetPassword;
