
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './Routes/Routes';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { CartProvider } from './contexts/CartProvider';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Product></Product>
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
