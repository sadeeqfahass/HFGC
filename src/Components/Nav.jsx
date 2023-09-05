import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="">
        <div className="logo-img">
          <img src="HFGC.png" alt="" />
        </div>
        <div className="links ">
          <ul className="d-flex align-items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/construction">Products</NavLink>
            </li>
            <li>
            <NavLink to="/">Solutions</NavLink>
            </li>
            <li>
            <NavLink to="/construction">Services</NavLink>
            </li>
            <li>
            <NavLink to="/construction">About</NavLink>
            </li>
            <button className="btn btn-secondary">Login</button>
          </ul>
        </div>
        <i className="icon fa-solid fa-bars"></i>
      </nav>
    </>
  );
}

export default Nav;
