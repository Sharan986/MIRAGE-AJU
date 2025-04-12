import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './Pages/Nav.jsx';
import Home from './Pages/Home.jsx';
import Home2 from './Pages/Home2.jsx';
import Bottom from './Pages/Bottom.jsx';
import Last from './Pages/Last.jsx';
import Login from './Pages/Login.jsx';
import Emergency from './Navigator/Emergency.jsx';
import Dashboard from './Navigator/Dashboard.jsx';
import Signup from './Pages/Signup.jsx';
import VideoConsultation from './VideoConsultation.jsx'; // use .jsx now
import Record from './Pages/Record.jsx';
import Medicine from './Pages/Medicine.jsx';
const AppContent = () => {
  const location = useLocation();
  const hideOnRoutes = ['/login', '/signup'];
  const shouldHideFooter = hideOnRoutes.includes(location.pathname.toLowerCase());

  // Sample Google Meet link (you can make this dynamic later)
  const videoLink = 'https://meet.google.com/lookup/dummyroomid';

  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home2 />
              {!shouldHideFooter && <Bottom />}
            </>
          }
        />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consultation" element={<VideoConsultation videoLink={videoLink} />} />
        <Route path="/records" element={<Record />} />
        <Route path="/medicine" element={<Medicine />} />
      </Routes>

      {!shouldHideFooter && <Last />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
