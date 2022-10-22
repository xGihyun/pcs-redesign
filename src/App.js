import React from 'react';
import Main from './pages/Main'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import GradeSchool from './pages/GradeSchool'
import JuniorHigh from './pages/JuniorHigh'
import SeniorHigh from './pages/SeniorHigh'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
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