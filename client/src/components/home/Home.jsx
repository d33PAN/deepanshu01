import React from "react"; 
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();

    return(
        <>
        <h1>Welcome to application</h1>
        <ul>How Do you wish to continue?</ul>
        <li onClick={()=>{navigate("/admin-login")}}>Continue as Admin</li>
        <li onClick={()=>{navigate("/vendor-login")}}>Continue as Vendor</li>
        <li onClick={()=>{navigate("/user-login")}}>Continue as User</li>
        
        </>
    )
}