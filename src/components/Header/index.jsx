import React from "react";
import Logo from '../../Images/logo.png'
import "./style.css";
import {
  Storefront,
  DashboardOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Header(page) {
  console.log(page.page);


  return (
    
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img className="logoo" src={Logo} alt="Group Solid"/>
          <a href="./" className="logo">PLATAFORMA DO EMPREENDEDOR</a>
        </div>
        <div className="topRight">
          <Link to="./" className="sacola">
            {page.page === "home" ? (
              <div className="selected">
                <Storefront />
              </div>
            ) : (
              <div className="topbarIconContainer">
                <Storefront />
              </div>
            )}
          </Link>

          <Link to="./admin" className="sacola">
            {page.page === "admin" ? (
              <div className="selected">
                <DashboardOutlined />
              </div>
            ) : (
              <div className="topbarIconContainer">
                <DashboardOutlined />
              </div>
            )}
          </Link>
          
        </div>
      </div>
    </div>

  );


}
