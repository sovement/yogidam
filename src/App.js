import React, { useState } from 'react';
import './App.css';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const App = () => {
  const [userInform, setUserInform] = useState(null);


  return (
    <Router>
      <Switch>
        <div>
          {routes.map((route) => (
            <Route key={route.path} exact path={route.path}>
              <route.component userInform={userInform} setUserInform={setUserInform} />
            </Route>
          )
          )}
        </div>
      </Switch>
    </Router>
  );
}

export default App;