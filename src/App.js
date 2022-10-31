import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Users from "./pages/Users/";

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavbarContainer />
      <Content>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Users />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
