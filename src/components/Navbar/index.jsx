import React from "react";
import s from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      Navbar
      <ul>
        {props.navs.map((item) => (
          <li>
            <Link activeClassName={s.activeLink} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
