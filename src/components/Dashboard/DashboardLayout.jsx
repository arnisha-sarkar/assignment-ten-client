import React from "react";
import Sidebar from "./SideBer/SideBer";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet /> {/* child route render হবে */}
      </div>
    </div>
  );
};

export default DashboardLayout;
