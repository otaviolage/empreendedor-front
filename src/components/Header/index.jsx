import React from "react";
import Logo from "../../images/logo.png"
import Login from "../../images/login.png"
import "./style.css";

import {
  AccountCircle,
  Home,
  Storefront,
  ShoppingCart,
  DashboardOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Header(page) {
  console.log(page.page);
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img className="logo2" src={Logo} alt="lsike"/>
          <a href="./" className="logo">PLATAFORMA DO EMPREENDEDOR</a>
        </div>
        
        <div className="topRight">
          <Link to="./" className="sacola">
            {page.page === "home" ? (
              <div className="selected">
                <Home 
                style={{fontSize: 40}}/>
              </div>
            ) : (
              <div className="topbarIconContainer">
                <Home
                style={{fontSize: 40}}
                />
              </div>
            )}
          </Link>

          <Link to="./cart" className="sacola">
            {page.page === "home" ? (
              <div className="selected">
                <ShoppingCart 
                style={{fontSize: 40}}/>
              </div>
            ) : (
              <div className="topbarIconContainer">
                <ShoppingCart 
                style={{fontSize: 40}}
                />
              </div>
            )}
          </Link>

          <Link to="./login-control" className="sacola">
            {page.page === "admin" ? (
              <div className="selected">
                <AccountCircle />
              </div>
            ) : (
              <div className="topbarIconContainer">
                <AccountCircle 
               style={{fontSize: 40}}
                />
              </div>
            )}
          </Link>
          
        </div>
      </div>
    </div>
  );
}
