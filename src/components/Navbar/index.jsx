import React from "react";
import "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      Navbar
      <ul>
        {props.navs.map((item) => (
          <li>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
