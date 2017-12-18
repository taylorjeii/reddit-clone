import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import Navigation from './components/Navigation';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/posts" />
          <Route exact path="/posts" render={ (props) =>  <Posts posts={this.props.posts} firebase={this.props.firebase}/> } />
          <Route exact path="/addpost" render={ (props) =>  <AddPost posts={this.props.posts} firebase={this.props.firebase}/> } />
          <Route component={ () => <h1>NotFound</h1> } />
        </Switch>
        </div>
      </Router>
    );
  }
} 


export default Routes;