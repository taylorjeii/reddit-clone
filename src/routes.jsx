import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import Navigation from './components/Navigation';

const Routes = props => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/posts" />
        <Route exact path="/posts" render={() => <Posts firebase={props.firebase} />} />
        <Route exact path="/addpost" render={() => <AddPost firebase={props.firebase} />} />
        <Route component={() => <h1>NotFound</h1>} />
      </Switch>
    </div>
  </Router>
);

Routes.defaultProps = {
  firebase: {}
};
Routes.propTypes = {
  firebase: PropTypes.object
};

export default Routes;
