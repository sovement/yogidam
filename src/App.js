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
      <Header/>

      <div>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />;
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;