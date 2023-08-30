import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import ServicesPage from "./Components/ServicesPage";
import UnderContruction from "./Components/UnderContruction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/construction" element={<UnderContruction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
