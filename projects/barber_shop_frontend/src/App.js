import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarberSignUp from './components/BarberSignUp';
import BarberProfilePage from './pages/BarberProfilePage';
import AdminPage from './pages/AdminPage';
import SearchResult from './pages/SearchResult'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="App center">
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/barber-signup" component={BarberSignUp} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/search-result/:name" exact component={SearchResult} />
              <Route path="/barber-profile" component={BarberProfilePage} />
            </Switch>
          </div>
         
       </div>
  
    </Router>
  );
}

export default App;
