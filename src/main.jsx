import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import { FavoriteProvider } from "./context/FavoriteContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteProvider>
    </CartProvider>
  </StrictMode>,
);
