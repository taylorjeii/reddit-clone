import React, { Component } from "react";
import firebase, { database } from "./firebase-config";
import styled from "styled-components";

import Routes from "../../routes";
import config from "./firebase-config";

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
    let postsRef = database.ref("posts");
    // eslint-disable-next-line prefer-const
    let self = this;

    postsRef.on("value", snapshot => {
      self.setState({
        posts: snapshot.val(),
        // loading: false,
        firebase: database
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
