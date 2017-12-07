import React, { Component } from 'react';
import styled from 'styled-components';

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: ''
    });
  }



  render() {
    const Header = styled.h1`
      color: #FFF;
    `
    const AppPostContainer = styled.div`
      align-self: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const PostTextbox = styled.input`
      width: 10rem;
    `;

    const SubmitPost = styled.button`
    display: block;
    `;

    return (
      <div className="AddPost">
        <Header>Add A New Post</Header>
          <input
            type="text"
            placeholder="Write the title of your post"
            onChange={ this.handleChange }
            value={ this.state.title }
          />
        <SubmitPost type="submit" onClick={ this.handleSubmit }>Submit</SubmitPost>
      </div>
    )
  }
}

export default AddPost;