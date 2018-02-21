import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { db, firebase } from '../../firebase';
import IsAuthenticated from '../../components/HOCs/IsAuthenticated';
import Landing from '../Home';
import Posts from '../Posts';
import AddPost from '../AddPost';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Navigation from '../../components/Navigation';

const App = () => (
  <div className="app-container">
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/add-post" component={AddPost} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route component={() => <h1>NotFound</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default IsAuthenticated(App);
