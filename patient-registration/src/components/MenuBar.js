import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css"; // Style for menu bar

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="logo">Logo</div>
      <div className="menu-items">
        <Link to="/">Dashboard</Link>
        <Link to="/patient-register">Patient Register</Link>
        <div className="dropdown">
          <span>Patient Data</span>
          <div className="dropdown-content">
            <a href="#link1">View Records</a>
            <a href="#link2">Search</a>
          </div>
        </div>
        <div className="dropdown">
          <span>Operation Theater</span>
          <div className="dropdown-content">
            <a href="#link3">Schedule</a>
            <a href="#link4">Reports</a>
          </div>
        </div>
        <Link to="/reports">Reports</Link>
      </div>
    </div>
  );
};

export default MenuBar;
