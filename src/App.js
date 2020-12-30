import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Home from './components/home/Home'
import ImagenState from './context/ImagenState';
import './index.css';

function App() {
  return (
    <ImagenState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </ImagenState>
  );
}

export default App;
