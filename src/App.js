import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import UserContextProvider from './context/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
