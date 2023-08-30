import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Partners from "./Partners";
import Services from "./Services";
import Solutions from "./Solutions";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <Services />
      <Solutions />
      <Footer />
    </>
  );
}

export default Home;
