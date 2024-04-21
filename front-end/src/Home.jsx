import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogProducts from "./views/CatalogProducts";
import Checkout from "./views/Checkout";
import SingleCatalogProduct from "./views/SingleCatalogProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogProducts />,
  },
  {
    path: "/:catalog_product_id",
    element: <SingleCatalogProduct />,
  },
  {
    path: "/checkout/:catalog_product_id",
    element: <Checkout />,
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
