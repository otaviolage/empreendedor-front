import React from "react";
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

          <Link to="./login-control" className="sacola">
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
