import React from 'react';
import history from './history';

import Home from './components/Home';

import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = (props) => {
  return (
    <Router history={history} forceRefresh={true}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
