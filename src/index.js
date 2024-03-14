import "./global.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// sans le stictMode
// root.render(<App />);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
