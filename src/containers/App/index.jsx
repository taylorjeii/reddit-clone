import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IsAuthenticated from '../../components/HOCs/IsAuthenticated';
import { AuthProvider } from '../../components/Contexts/AuthContext';
import * as routes from '../../constants/routes';
import Landing from '../Home';
import Posts from '../Posts';
import AddPost from '../AddPost';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Navigation from '../../components/Navigation';

const App = () => (
  <AuthProvider>
    <div className="app-container">
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path={routes.HOME} component={Landing} />
            <Route exact path={routes.POSTS} component={Posts} />
            <Route exact path={routes.ADD_POST} component={AddPost} />
            <Route exact path={routes.SIGN_UP} component={SignUp} />
            <Route exact path={routes.SIGN_IN} component={SignIn} />
            <Route component={() => <h1>NotFound</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  </AuthProvider>
);

export default IsAuthenticated(App);
