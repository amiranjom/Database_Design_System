import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarberSignUp from './pages/BarberSignUp'
import './App.css';

function App() {
  return (
    <Router>

        <div className="App">
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/barber-signup" component={BarberSignUp} />
            </Switch>
          </div>
         
       </div>
  
    </Router>
  );
}

export default App;
