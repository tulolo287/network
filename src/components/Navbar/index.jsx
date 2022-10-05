import React from "react";
import "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      Navbar
      <ul>
        {props.navs.map((item) => (
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
