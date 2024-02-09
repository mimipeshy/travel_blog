import React from "react";
import logo from "../images/logo.png"
import "../css/nav.css";

export default function Navbar(){
    return(
        <div className="header--class">
         <img src={logo} alt="world logo"className="img--logo"/><h1>WELCOME TO MY BLOG</h1>
         
        </div>
    )
}