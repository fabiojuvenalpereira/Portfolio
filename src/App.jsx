import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
