import React, { useState } from "react";

function Nav() {
  return (
    <>
      <nav className="">
        <div className="logo-img">
          <img src="Logo.png" alt="" />
        </div>
        <div className="links ">
          <ul className="d-flex align-items-center">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
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
