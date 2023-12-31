import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    let year = new Date().getFullYear()
  return (
    <>
      <div className="footer container-fluid text-center">
        <div className="footer-con row d-flex align-items-center gap-2 text-light">
          <div className="col logo-con sm-col-12 md-col-4">
            <img src="HFGC.png" alt=""/>
          </div>
          <div className="col sm-col-12 md-col-4">
            <p>Contact Us</p>
            <div className="phone py-1">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+2347036595980">+234(0)-7036595980</a>
            </div>
            <div className="phone py-1">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+2348036264035">+234(0)-8036264035</a>
            </div>
            <div className="mail">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:info@hfgcsolutions.com">info@hfgcsolutions.com</a>
            </div>
          </div>
          <div className="col d-flex flex-column gap-2 sm-col-12 md-col-4">
            <p>Site Map</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/construction">Products</NavLink>
            <NavLink to="/">Solutions</NavLink>
            <NavLink to="/construction">Services</NavLink>
            <NavLink to="/construction">About</NavLink>
          </div>
          <div className="col newsletter sm-col-12 md-col-4">
            <p>Subscribe to our newsletter</p>
            <div className="input py-2 d-flex justify-content-center gap-1 align-items-center">
              <input type="text" placeholder="Email" />
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <hr className="text-light mb-0"/>
        <p className="text-light mb-0 py-2">&copy; Copyright HFGC {year} All rights reserved</p>
      </div>
    </>
  );
}


export default Footer;
