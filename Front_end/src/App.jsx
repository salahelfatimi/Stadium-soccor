import React from "react";
import Customer from "./User";
import Admin from "./Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route exact path="*" element={<Customer />} />
        <Route path="/Admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
