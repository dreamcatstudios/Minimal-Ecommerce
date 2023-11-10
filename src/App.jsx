import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/categories", element: <Categories /> },
  {
    path: "/product",
    element: <ProductInfo />,
    children: [
      {
        path: ":productId", // Use a dynamic parameter like :productId
        element: <ProductInfo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
