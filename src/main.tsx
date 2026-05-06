
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import CartProvider from "@/contexts/CartContext";
import ProductProvider from "@/contexts/ProductContext";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>
);
  