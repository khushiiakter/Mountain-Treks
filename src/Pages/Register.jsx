import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen  bg-[#f2f4ff]">
      <div className="card bg-[#e3e5f3d5] w-full max-w-lg shrink-0 border-2 border-[#556180] rounded-3xl p-10">
        <h2 className="text-3xl font-semibold text-center">
          Register your account
        </h2>
        <form className="card-body">
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
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-full">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
