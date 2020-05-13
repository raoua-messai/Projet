import './App.css';
import NavBar from './components/NavBar';

import Home from './pages/homeView'
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About'


function App() {
    return (
        <div className="App">
        
            <h1>Image Cards uploader</h1>
            <Home/>
            <Router>
            <NavBar />
              <Switch>
                <Route exact path="/about" component={About}/>
              </Switch>
            </Router>
        </div>
    );
}

export default App;
