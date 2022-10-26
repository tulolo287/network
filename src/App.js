import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
