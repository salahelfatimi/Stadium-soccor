import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="dark">
     <div className="bg-white flex flex-col min-h-screen justify-between   dark:bg-gray-800">
    <App/>
    </div>
    </div>
  </React.StrictMode>
);
