import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col bg-white min-h-screen">

      <Header title={title} />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10">
          {children}
        </div>
      </div>

    </div>
  );
}
