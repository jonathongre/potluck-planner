import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Home from './components/pages/home';
import Landing from './components/pages/landing'
import PrivateRoute from './utils/authRouter';

import './App.css' 

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path='/home' component={Home} />
        
      </Switch>
    </div>
  );
}

export default App;
