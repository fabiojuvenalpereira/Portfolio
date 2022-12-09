import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/project-details/project-details';

import Home from './pages/Home';
// import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/:id" element={<Projects />} /> */}
      <Route path="/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
