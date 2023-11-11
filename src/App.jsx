import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo";
import Categories from "./pages/Categories";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "categories", element: <Categories /> },
      {
        path: "product",
        element: <ProductInfo />,
        children: [
          {
            path: ":productId",
            element: <ProductInfo />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
