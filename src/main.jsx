import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#24272c]">
      <div >
        <Router>
          <App />
        </Router>
      </div>
    </div>
  </React.StrictMode>
);
