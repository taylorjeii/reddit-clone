import React, { Component } from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

import Routes from '../../routes';
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);

    this.state = {
      posts: {},
      // loading: false,
      firebase: null,
    };
  }

  componentWillMount() {
    // eslint-disable-next-line prefer-const
    let postsRef = firebase.database().ref('posts');
    // eslint-disable-next-line prefer-const
    let self = this;

    postsRef.on('value', (snapshot) => {
      self.setState({
        posts: snapshot.val(),
        // loading: false,
        firebase: firebase.database(),
      });
    });
  }

  render() {
    const AppContainer = styled.div`
      // height: 100%;
      // width: 100%;
      // display: flex;
    `;
    // console.log(`app: ${this.state.posts}`);
    return (
      <AppContainer className="app-container">
        <Routes firebase={this.state.firebase} posts={this.state.posts} />
      </AppContainer>
    );
  }
}

export default App;
