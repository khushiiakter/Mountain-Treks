import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser, auth } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const isPasswordValid = (password) => {
    const minLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    return minLength && hasUppercase && hasLowercase;
  };

  useEffect(() => {
    const user = auth.currentUser;
    if(user){
      navigate("/");
    }
  }, [auth, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // get data from form
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!isPasswordValid(password)) {
      setError(
        "Password must be at least 6 characters long, include an uppercase letter, and a lowercase letter."
      );
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate("/");
      })

      .catch((error) => {
        console.log("Google Login Error:", error.message);
        setError("Failed to login with Google.");
      });
  };

  return (
    <div className=" flex justify-center items-center py-7  bg-[#f2f4ff]">
      <div className="card bg-[#e3e5f3d5] w-full  max-w-lg shrink-0 border-2 border-[#556180] rounded-3xl p-9">
        <h2 className="text-3xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body   pb-3">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
             {error && (
              <label className="label text-sm text-red-700">{error}</label>
            )}
            {/* {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )} */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-neutral rounded-full">Register</button>
          </div>
          <div className="divider text-black">OR</div>

          <button onClick={handleGoogleLogin} className="btn btn-outline rounded-full">
            Continue with Google
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
