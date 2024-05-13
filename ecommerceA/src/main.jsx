import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartActions } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartActions>
      <App />
    </CartActions>
  </React.StrictMode>
);
