import React, { Component } from 'react';
import { db, firebase } from '../../firebase';
import styled from 'styled-components';

import Routes from '../../routes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firebase: null
    };
  }

  componentWillMount() {
    this.setState({
      firebase: db.getDatabase()
    });
  }

  render() {
    return (
      <div className="app-container">
        <Routes firebase={this.state.firebase} />
      </div>
    );
  }
}

export default App;
