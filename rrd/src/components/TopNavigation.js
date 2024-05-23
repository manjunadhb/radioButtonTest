import React from "react";
import { Link, NavLink } from "react-router-dom";

function TopNavigation() {
  let activeLink = (a) => {
    if (a.isActive == true) {
      return { backgroundColor: "green", color: "white" };
    }
  };

  return (
    <nav>
      <NavLink
        style={(a) => {
          return activeLink(a);
        }}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={(a) => {
          return activeLink(a);
        }}
        to="/tasks"
      >
        Tasks
      </NavLink>
      <NavLink
        style={(a) => {
          console.log(a);

          return activeLink(a);
        }}
        to="/leaves"
      >
        Leaves
      </NavLink>
      <NavLink
        style={(a) => {
          return activeLink(a);
        }}
        to="/su"
      >
        Status Update
      </NavLink>
      <NavLink to="/">Logout</NavLink>
    </nav>
  );
}

export default TopNavigation;
