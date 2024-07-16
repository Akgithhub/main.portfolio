import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AnimatedCursor
          innerSize={16}
          outerSize={28}
          color="136, 171, 142"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
    <App />
  </>
);
