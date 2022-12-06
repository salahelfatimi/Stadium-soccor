import { useEffect, useRef, useState } from "react";
import logo from "../image/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import React from "react";

export default () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Pricing", path: "/Pricing" },
    { title: "Contact", path: "/Contact" },
    { title: "About", path: "/About" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav
      ref={navRef}
      className="bg-white w-full top-0 z-20 pt-4 dark:bg-gray-900"
    >
      <div className="items-center px-4 max-w-screen-2xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <NavLink to="/">
            <img src={logo} width={160} height={50} alt="stadium soccor" />
          </NavLink>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state  ? "h-screen pb-20 overflow-auto pr-4" : "hidden"} 
          `}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <div className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 mt-4 lg:mt-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      <NavLink  onClick={() => setState(!state)} to={item.path}>{item.title}</NavLink>
                    </li>
                  );
                })}
              </div>
              <div>
                <li className="mt-8 lg:mt-0">
                  <NavLink
                   onClick={() => setState(!state)}
                    to="/login"
                    className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-full  shadow block lg:inline"
                  >
                    Login
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold ">
                      <FiLogIn />
                    </span>
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
    
  );
};
