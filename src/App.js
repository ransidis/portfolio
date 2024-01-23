import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SideMenu from './Pages/SideMenu';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import { LoadingPage } from './LoadingPage';
import FirstTime from './Pages/FirstTime';

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (hasVisitedBefore) {
      // If the user has visited before, update state to false
      setFirstVisit(false);
    } else {
      // If this is the first visit, set the flag in local storage
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <>
      {firstVisit ? (
        <FirstTime onClose={() => setFirstVisit(false)} />
      ) : (
        <>
          {loading ? (
            <LoadingPage />
          ) : (
            <div className='d-flex'>
              <div className='col-sm-2'>
                <SideMenu />
              </div>
              <div
                className='body col-sm-10'
                style={{ overflowY: 'auto', maxHeight: '100vh' }}
              >
                <Routes location={location} key={location.pathname}>
                  <Route index element={<Home />} />
                  <Route path='/about-me' element={<AboutMe />} />
                  <Route path='/education' element={<Education />} />
                  <Route path='/projects' element={<Projects />} />
                </Routes>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
