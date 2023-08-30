import React from "react";
import "../construction.css";
import Footer from "./Footer";
import Nav from "./Nav";

function UnderContruction() {
  return (
    <>
    <Nav />
      <div className="parent-con">
        <img src="under-const.png" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default UnderContruction;
