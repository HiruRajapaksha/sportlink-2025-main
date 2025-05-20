// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Pages/LandingPage'; // Import LandingPage
import Register from './Components/Register'; // Import Register component
import TaskBar from './Components/TaskBar'; // Import TaskBar component
import HomePage from './Pages/HomePage'; // Import HomePage component
import ProfilePage from './Pages/ProfilePage'; // Import ProfilePage component
import NetworkPage from './Pages/NetworkPage'; // Import NetworkPage component
import PathwaysPage from './Pages/PathwaysPage'; // Import PathwaysPage component
import Settings from './Components/Settings'; // Import settings component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/taskbar" element={<TaskBar />} />
        <Route path="/home" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Add ProfilePage route */}
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/pathways" element={<PathwaysPage />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
