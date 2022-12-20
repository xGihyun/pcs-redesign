import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import GradeSchool from './pages/GradeSchool';
import JuniorHigh from './pages/JuniorHigh';
import SeniorHigh from './pages/SeniorHigh';
import History from './pages/History';
import Philosophy from './pages/Philosophy';
import GoalsCoreValues from './pages/GoalsCoreValues';
import InstitutionalDirections from './pages/InstitutionalDirections';
import ServicesFacilities from './pages/ServicesFacilities';
import Paascu from './pages/Paascu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="philosophy" element={<Philosophy />} />
            <Route path="goals" element={<GoalsCoreValues />} />
            <Route path="institutional" element={<InstitutionalDirections />} />
            <Route path="services" element={<ServicesFacilities />} />
            <Route path="paascu" element={<Paascu />} />
          </Route>
          <Route path="academics" element={<Academics />}>
            <Route path="grade-school" element={<GradeSchool />} />
            <Route path="junior-high" element={<JuniorHigh />} />
            <Route path="senior-high" element={<SeniorHigh />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;