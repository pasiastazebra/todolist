import React from "react";
import ReactDOM from "react-dom/client";

import SidebarMenu from "./SidebarMenu.tsx";
import TasksBar from "./TasksBar.tsx";
import Window from "./Window.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="gridContainer h-[100vh]">
      <SidebarMenu />
      <TasksBar />
      <div>
        <Window />
      </div>
    </div>
  </React.StrictMode>
);
