import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import See_appointment from "./component/See_appointment";
import Contact from "./component/Contact";
import About from "./component/About";
import Pricing from "./component/Pricing";
import Login from "./component/Login";
import Home from "./Home";
import Footers from "./component/Footers";
export default () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/See_appointment" element={<See_appointment />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
};
