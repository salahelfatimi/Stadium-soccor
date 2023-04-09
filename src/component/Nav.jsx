import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import menu from "../assets/list.png";

export default function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/Pricing" },
    { name: "Contact", href: "/Contact" },
    { name: "About", href: "/About" },
  ];

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    setShowSidebar(false);
  };

  let activeStyle = {
    textDecoration: " underline",
    textDecorationColor: "#68FE9A",
    color: "rgb(254 250 241 / var(--tw-text-opacity))",
    textUnderlineOffset: "8px",
    textDecorationThickness: "4px",
    transitionDuration: "700ms",
  };

  return (
    <div>
      {/* Nav for desktop resolition  */}
      <header className="sticky top-0 z-50 p-6 bg-[#060606] rounded-b-3xl shadow-2xl hidden md:block">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-44" />
          </div>
          <div>
            <div>
              {navigation.map((ele, i) => (
                <NavLink
                  to={ele.href}
                  key={i}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className=" text-[#6a6b70] hover:text-[#FEFAF1] hover:underline hover:decoration-[#68FE9A]  duration-700 hover:duration-700 underline-offset-8 decoration-4   px-6 py-2 "
                >
                  <span className=" font-medium font-mono">{ele.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Nav for mobile resolition  */}
      <header
        className={`fixed  top-0 z-50   p-6 w-full bg-[#060606] rounded-b-2xl shadow-2xl block md:hidden ${
          showSidebar ? "-translate-y-96 duration-700" : "duration-700"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} className="w-44" />
          </div>
          <button>
            <img
              src={menu}
              alt=""
              className="w-9"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </button>
        </div>
      </header>
      <header
        className={` bg-[#060606] fixed  top-0 z-50 w-full p-6 shadow-2xl  rounded-b-2xl  block md:hidden ${
          showSidebar ? "duration-700" : "-translate-y-96 duration-700"
        }`}
      >
        <div className="grid place-items-center">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-44" />
          </div>
          <div>
            <div className="pt-8">
              {navigation.map((ele, i) => (
                <NavLink
                  to={ele.href}
                  onClick={() => setShowSidebar(!showSidebar)}
                  key={i}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className=" grid justify-items-center text-[#6a6b70] hover:text-[#FEFAF1] hover:underline hover:decoration-[#68FE9A]  duration-700 hover:duration-700 underline-offset-8 decoration-4   px-6 py-2 "
                >
                  <span className=" font-medium font-mono">{ele.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
