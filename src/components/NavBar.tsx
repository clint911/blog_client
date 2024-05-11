import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <span className="nav-logo">Personally</span>
      <nav>
        <div className="nav-items">
          <NavLink className="nav-link" to="/DailyDigest">Daily Digest </NavLink>
          <NavLink className="nav-link" to="/">H</NavLink>
          <NavLink className="nav-link" to="/DesignTools">Design Tools</NavLink>
          <NavLink className="nav-link" to="/Tutorials">Tutorials</NavLink>
          <NavLink className="nav-link" to="/AdminPage">AdminPage</NavLink>
          <button className="Subscribe" type="submit">Subscribe</button>
        </div>
      </nav>
    </div>
  );
}
