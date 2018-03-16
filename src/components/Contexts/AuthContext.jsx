import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase';

// create auth context
const AuthContext = React.createContext({
  authUser: null
});

// create auth consumer
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState(() => ({ authUser })) : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    const { authUser } = this.state;
    return <AuthContext.Provider value={{ authUser }}>{this.props.children}</AuthContext.Provider>;
  }
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
