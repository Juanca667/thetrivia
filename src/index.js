import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
      </Switch>
    </UserProvider>
  );
}

export default App;
