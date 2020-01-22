// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';

// == import composants
import Navbar from 'src/components/Navbar';
// import Banner from 'src/components/Banner';
import Homepage from 'src/containers/Homepage';
import Event from 'src/components/Event';
import Login from 'src/components/Login';
import Signin from 'src/components/Signin';
import CreateEvent from 'src/components/CreateEvent';
import Profile from 'src/components/Profile';
import Sponsors from 'src/components/Sponsors';
import About from 'src/components/About';


// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/event">
        <Event />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/create-event">
        <CreateEvent />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/sponsors">
        <Sponsors />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
