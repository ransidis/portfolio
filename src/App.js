import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import SideMenu from './Pages/SideMenu';
import AboutMe from './Pages/AboutMe'
import Home from './Pages/Home';
import Education from './Pages/Education';


function App() {
  return (
  <div className='d-flex' >
    <div className='col-sm-2'><SideMenu/></div>
    <div className='body col-sm-10' style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-me"  element={<AboutMe/>} />
      <Route path="/education"  element={<Education/>} />
    </Routes>
    </div>
  </div>
  );
}

export default App;
