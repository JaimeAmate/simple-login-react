import React from 'react';
import './App.css';
import LoginContainer from './Components/Views/Login/LoginContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateUserContainer from "./Components/Views/CreateUser/CreateUserContainer";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Views/Home/HomeContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginContainer/>
        </Route>
        <Route path='/register'>
          <CreateUserContainer/>
        </Route>
        <ProtectedRoute
          path='/home'
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
