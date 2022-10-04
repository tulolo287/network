import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Messages from './pages/Messages';

function App(props) {

  const ProfilePosts = () => {
    return (
      <div>
        <Profile posts={props.store.state.posts}/>
      </div>
    );
  }

  return (
    <div className="App">
  <Header/>
      <Navbar navs={props.store.state.navs}/>
      <Content>
      <Routes>
        <Route path='/profile' element={<ProfilePosts/>}/>
        <Route path='/messages' element={<Messages/>}/>
      </Routes>
      </Content>
    </div>
  );
}

export default App;
