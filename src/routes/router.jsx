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

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
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
            element: <AdventureDetails></AdventureDetails>,
            loader:({params}) => fetch('../mountain.json').then(res => res.json()),
        },
        {
            path: "/update-profile",
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: "/user-profile",
            element: <UserProfile></UserProfile>
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
      ]
    },
    
  ]);

export default router;