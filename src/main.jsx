import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "../Layout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
