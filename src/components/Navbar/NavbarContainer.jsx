import { connect } from "react-redux";
import Navbar from "./index";

const mapToState = (state) => {
   return {
      navs: state.profileReducer.navs,
      user: state.authReducer.user,
   };
};

const mapToDispatch = () => {};

const NavbarContainer = connect(mapToState, mapToDispatch)(Navbar);

export default NavbarContainer;
