import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from "./Settings";
import Player from "./Player";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings/:user",
    element: <Settings />,
  },
  {
    path: "/player/:kpId",
    element: <Player />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
