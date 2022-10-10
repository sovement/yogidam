import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';


const App = () => {


  return (
    <Router>
        <Switch>
          <div>
            {routes.map((route) => (
              <Route key={route.path} exact path={route.path}>
                <route.component />
              </Route>
            ) 
            )}
          </div>
        </Switch>
    </Router>
  );
}

export default App;