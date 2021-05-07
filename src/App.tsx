import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './pages/Counter';
import Person from './pages/Person';
import Header from './Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path='/counter' component={Counter}></Route>
          <Route path='/persons' component={Person}></Route>
        </Switch>
      </Container>
    </Router>
    </>
  );
}

export default App;
