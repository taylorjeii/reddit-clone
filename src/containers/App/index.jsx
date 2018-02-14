import React, { Component } from 'react';
import { db, firebase } from '../../firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Posts from '../Posts';
import AddPost from '../AddPost';
import Navigation from '../../components/Navigation';

const App = () => (
  <div className="app-container">
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/posts" />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/addpost" component={AddPost} />
          <Route component={() => <h1>NotFound</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
