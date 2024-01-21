import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom';

import SideMenu from './Pages/SideMenu';
import AboutMe from './Pages/AboutMe'
import Home from './Pages/Home';


function App() {
  return (
  <div className='d-flex' >
    <div className='col-sm-2'><SideMenu/></div>
    <div className='body'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-me"  element={<AboutMe/>} />
    </Routes>
    </div>
  </div>
  );
}

export default App;
