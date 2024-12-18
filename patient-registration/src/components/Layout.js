import React from "react";
import MenuBar from "./MenuBar";

const Layout = ({ children }) => {
  return (
    <div>
      <MenuBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
