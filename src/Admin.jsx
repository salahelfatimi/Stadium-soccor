import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Admin/Login";

export default () => {
  return (
    <div>
      <div className="flex flex-col justify-center  min-h-screen">
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
