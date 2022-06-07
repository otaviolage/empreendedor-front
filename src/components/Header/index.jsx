import React from "react";
import "./style.css";

import { AccountCircle, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Header(page) {
  const reload = () => {
    localStorage.clear()
    window.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a href="./" className="logo">
            PLATAFORMA DO EMPREENDEDOR
          </a>
        </div>

        <div className="topRight">
          <button
            onClick={() => {
              reload();
            }}
          >
            <Link to="./" className="sacola">
              <div className="selected">
                <Home style={{ fontSize: 40 }} />
              </div>
            </Link>
          </button>

          <button>
            <Link to="./login-control" className="sacola">
              <div className="selected">
                <AccountCircle style={{ fontSize: 40 }} />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
