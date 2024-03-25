import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";
import CategoryProvidr from "./context/CategoryContext";
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContext";
import ScrollProvider from "./context/ScrollContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CategoryProvidr>
    <SidebarProvider>
      <ProductsProvider>
        <CartProvider>
          <ScrollProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ScrollProvider>
        </CartProvider>
      </ProductsProvider>
    </SidebarProvider>
  </CategoryProvidr>
);
