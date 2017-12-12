import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Posts from './containers/Posts';
import AddPost from './containers/AddPost';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/posts" />
          <Route exact path="/posts" render={ (props) =>  <Posts posts={this.props.posts}/> } />
          <Route exact path="/addpost" component={ AddPost } posts={this.props.posts} />
          <Route component={() => <h1>NotFound</h1> } />
        </Switch>
      </Router>
    );
  }
} 


export default Routes;