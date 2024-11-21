import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cards from "../components/Cards";
import AdventureDetails from "../Pages/AdventureDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            children: [
              {
                path: "/",
                element: <Cards></Cards>,
                loader:() => fetch('../mountain.json').then(res => res.json()),
              },
            ],
        },
        {
            path: "/adventureDetails/:id",
            element: <PrivateRoutes><AdventureDetails></AdventureDetails></PrivateRoutes>,
            loader:({params}) => fetch('../mountain.json').then(res => res.json()),
        },
        {
            path: "/update-profile",
            element:  <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
        },
        {
            path: "/user-profile",
            element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>,
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
              element: <Register></Register>,
            },
            {
              path: "/auth/forget-password",
              element: <ForgetPassword></ForgetPassword>,
            },
    
          ]
        }
      ]
    },
    
  ]);

export default router;