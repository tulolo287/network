import { connect } from "react-redux";
import Navbar from "./index";

const mapToState = (state) => {
  return {
    navs: state.profileReducer.navs
  };
};

const mapToDispatch = () => {};

const NavbarContainer = connect(mapToState, mapToDispatch)(Navbar);

export default NavbarContainer;
