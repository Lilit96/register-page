import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Register}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
