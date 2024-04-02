import React from "react";
import ReactDOM from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import { Pages } from "./types/index.ts";
import Notification from "./pages/Notification.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: Pages.home,
            index: true,
            element: <Home />,
          },
          {
            path: Pages.notification,

            element: <Notification />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="relative h-full w-full">
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
      <App />
      <Toaster
        richColors
        position="top-center"
        toastOptions={{ style: { fontFamily: "'AvertaStdCY', sans-serif" } }}
      />
    </StyleProvider>
  </div>,
);
