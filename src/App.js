import "./App.css";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import RegisterPage from "./pages/RegisterPage";
import { setUserData } from "./store/auth-reducer";
import { useEffect } from "react";
import { connect } from "react-redux"; //

function App(props) {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    user && props.setUserData(user);
  }, []);

  return (
    <div className="App">
      <HeaderContainer />
      <NavbarContainer />
      <Content>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Content>
    </div>
  );
}
const mapToState = (state) => {};

export default connect(mapToState, { setUserData })(App);
