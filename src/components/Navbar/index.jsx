import React from "react";
import "./navbar.module.css";
import { NavLink, Redirect } from "react-router-dom";

const Navbar = (props) => {
   return (
      <nav>
         Navbar
         <ul>
            {props.navs.map((item) => (
               <li>
                  {item.path === "/profile" ? (
                     props.user.isAuth ? (
                        <NavLink to={`/profile/${props.user.userId}`}>
                           {item.title}{" "}
                        </NavLink>
                     ) : (
                        <NavLink to="/login">{item.title}</NavLink>
                     )
                  ) : (
                     <NavLink to={item.path}>{item.title}</NavLink>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
