import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero container-fluid w-100 vh-100">
        <div className="text-con text-center text-dark d-flex align-items-center justify-content-center flex-column">
          <h1 className="main-heading md-text-center mb-5">HFGC Energy & Power Solutions Ltd</h1>
          <p className="sub-heading text-center lh-lg">
          HFGC Energy & Power Solutions Ltd. based in Lagos, Nigeria with Registered No. RC656179 is a premier provider of innovative and high quality power engineering products, technical services and solution that meet the need of customers involve in the production, transmission and distribution of electric power.
          </p>
          <NavLink to="/construction" className="hero-btn btn btn-danger">Explore </NavLink>
        </div>
      </section>
    </>
  );
}

export default Hero;
