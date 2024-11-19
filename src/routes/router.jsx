import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/update-profile",
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: "/user-profile",
            element: <UserProfile></UserProfile>
        },
      ]
    },
    {
      path: "/auth",
      element: <AuthLayouts></AuthLayouts>,
      children:[
        {
          path: "/auth/login",
          element: <Login></Login>, 
        },
        {
          path: "/auth/register",
          element: <Register></Register>
        },

      ]
    }
  ]);

export default router;