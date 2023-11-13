import React from "react";
import ReactDOM from "react-dom/client";

import SidebarMenu from "./SidebarMenu.tsx";
import TasksBar from "./TasksBar.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col flex-wrap content-start al h-[100vh]">
      <SidebarMenu />
      <TasksBar />
    </div>
  </React.StrictMode>
);
