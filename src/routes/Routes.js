import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Game from '../components/Game';

const Routes = () => {
return (
<Switch>
<Route exact path="/" component={Login} />
<Route path="/game" component={Game} />
</Switch>
);
};

export default Routes;