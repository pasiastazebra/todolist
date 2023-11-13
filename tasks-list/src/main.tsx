import React from "react";
import ReactDOM from "react-dom/client";
import SidebarMenu from "./SidebarMenu.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-gray-100 flex flex-col h-[100vh]">
      <SidebarMenu />
    </div>
  </React.StrictMode>
);
