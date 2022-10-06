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
      <Navbar navs={props.store.getState().navs} />
      <Content>
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                posts={props.store.getState().posts}
                dispatch={props.store.dispatch.bind(props.store)}
                athued={true}
              />
            }
          />
          <Route path="/messages" element={<Messages dispatch={props.store.dispatch.bind(props.store)} dialogs={props.store.getState().dialogs} athued={true} />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
