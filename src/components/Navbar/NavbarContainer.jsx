import { connect } from "react-redux";
import Navbar from "./index";

const mapToState = (state) => {
  return {
    navs: state.profileReducer.navs
  };
};

const NavbarContainer = connect(mapToState)(Navbar);

export default NavbarContainer;
