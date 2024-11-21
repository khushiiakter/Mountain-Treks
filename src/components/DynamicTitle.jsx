import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();
    
    const routeTitles = {
        "/" : "Home - Mountain Treks",
        "/update-profile" : "Update Profile - Mountain Treks",
        "/user-profile" : "User Profile - Mountain Treks",
        "/auth-login" : "Login - Mountain Treks",
        "/auth-register" : "Register - Mountain Treks",

    };
    useEffect(()=>{
        const currentPath = location.pathname;
        const title = routeTitles[currentPath] || "Mountain Treks";
        document.title = title;
    },[location]);

    
    return null;
};

export default DynamicTitle;