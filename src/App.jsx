import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import NoPageFound from './components/noPageFound';
import './App.css';

const App = () => {
  // disable loader
  const Loader = document.getElementById('loader');
  if (Loader) Loader.style.display = 'none';
  return (
    <Router>
      <Switch>
        <Route exact name="home" path="/" component={Home} />
        <Route exact path="/trending" component={Home} />
        <Route exact name="sticker" path="/sticker" component={Home} />
        <Route exact path="/translate" component={Home} />
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  );
};

export default App;
