import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./router";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#041429" } }}>
      <RouterProvider router={Root} />
    </ConfigProvider>
  </React.StrictMode>
);
