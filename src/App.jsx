import React from 'react';
import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Add from 'components/Kard/Add';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from 'components/Kard/List';

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="sm">
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/:kardId">
            <Add />
          </Route>
          <Route path="/">
            <Add />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
