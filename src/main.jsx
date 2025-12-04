import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import data from "./data";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
);
