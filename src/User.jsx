import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import See_appointment from "./Components/See_appointment";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Saction from "./Components/Saction";
import Pricing from "./Components/Pricing";

import Footers from "./Components/Footers";
export default () => {
  return (
    <div>
      <div>
        <div className="flex flex-col  min-h-screen   justify-between ">
          <Nav />

          <div className="relative pt-24 md:pt-4 ">
            <Routes>
              <Route exact path="*" element={<Saction />} />
              <Route path="/About" element={<About />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Contact" element={<Contact />} />

              <Route path="/See_appointment" element={<See_appointment />} />
            </Routes>
          </div>

          <Footers />
        </div>
      </div>
    </div>
  );
};
