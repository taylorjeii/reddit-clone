import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { firebase, auth } from '../firebase';

const IsAuthenticated = Component => {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    getChildContext() {
      return {
        authUser: this.state.authUser
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState(() => ({ authUser })) : this.setState(() => ({ authUser: null }));
      });
    }
    render() {
      return <Component />;
    }
  }

  Authenticate.childContextTypes = {
    authUser: PropTypes.object
  };

  return Authenticate;
};

export default IsAuthenticated;
