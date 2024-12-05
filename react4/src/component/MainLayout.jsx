import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

function Mainlayout(){
    return (
        <>
        <h1>Welcome to Home Page</h1>
        <nav>
            <ul className="aa">
                <li ><Link to="/login">Login</Link></li>
                <li ><Link to="/dashboard">Dashboard</Link></li>
                <li ><Link to="/registration">Registration</Link></li>
                
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Mainlayout;