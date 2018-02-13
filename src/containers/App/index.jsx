import React, { Component } from 'react';
import { db, firebase } from '../../firebase';
import styled from 'styled-components';

import Routes from '../../routes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: {},
      // loading: false,
      firebase: null
    };
  }

  componentWillMount() {
    // eslint-disable-next-line prefer-const
    let postsRef = db.getAllPosts();
    // eslint-disable-next-line prefer-const
    let self = this;

    postsRef.on('value', snapshot => {
      self.setState({
        posts: snapshot.val(),
        // loading: false,
        firebase: db.getDatabase()
      });
    });
  }

  render() {
    return (
      <div className="app-container">
        <Routes firebase={this.state.firebase} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
