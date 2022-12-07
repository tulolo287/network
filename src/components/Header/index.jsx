import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import s from "./header.module.css";

const Header = (props) => {
   const navigate = useNavigate()
   const logout = () => {
      props.setLogout();
      navigate('/users')
   };
   return (
      <header>
         <div className={s.header__login}>
            {!props.user.isAuth ? (
               <>
                  <span>
                     <NavLink to="/login">Login</NavLink>
                  </span>
                  <span>
                     <NavLink to={"/register"}>Register</NavLink>
                  </span>
               </>
            ) : (
               <section>
                  Hello: <span>{props.user.email}</span>
                  <button onClick={logout}>Exit</button>
               </section>
            )}
         </div>
      </header>
   );
};

export default Header;
