import React, { Component } from 'react';
import styled from 'styled-components';

class AddPost extends Component {
  constructor() {
    super();

    this.handlePostTitleChange = this.handlePostTitleChange.bind(this);
    this.handlePostBodyChange = this.handlePostBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printFormValues = this.printFormValues.bind(this);
  }

  state = {
    title: '',
    postBody: ''
  }

  handlePostTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handlePostBodyChange = (e) => {
    this.setState({
      postBody: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      downvote: 0,
      title: this.state.title,
      postBody: this.state.postBody,
      upvote: 0,
    });

    this.setState({
      title: ''
    });
  }

  printFormValues = (values) => {
    console.log(values);
  }

  render() {
    const Header = styled.h1`
      color: #FFF;
      font-family: 'Alegreya', serif; 
    `

    const SubmitPost = styled.button`
      border: 1px solid #FFF;
      color: #FFF;
      background-color: #AEBD38;
      font-size: 1rem;
      font-family: 'Roboto Condensed', sans-serif;
      letter-spacing: 1px;
      margin: 0 .5rem;
      padding: .5rem;
      transition: all .2s ease-out;

      &:hover {
        border-color: #598234;
        background-color: #598234;
      }
    `;

    const addPostContainerStyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }

    const formLabelStyle = {
      color: '#FFF',
      display: 'block',
      fontFamily: 'Alegreya, serif',
    };

    const formFieldStyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem'
    };

    return (
      <div className="add-post-container" style={addPostContainerStyle}>
        <Header>Add A New Post</Header>
          <form onSubmit={submittedValues => console.log(submittedValues)} id="form">
            <div className="form-field" style={formFieldStyle}>
            <label style={formLabelStyle} htmlFor="post-title">Post Title</label>
            <input 
              type="text"
              field="postTitle" 
              id="post-title"
              placeholder="Write the title of your post"
              onChange={ this.handlePostTitleChange }
              value={ this.state.title }                   
            />
            </div>
            <div className="form-field" style={formFieldStyle}>
              <label style={formLabelStyle} htmlFor="hello">Post Body</label>
              <textarea  
                type="text"
                rows="10"
                cols="50"
                field="hello" 
                id="hello"
                placeholder="Write the content post of your here"
                onChange={ this.handlePostBodyChange }
                value={ this.state.postBody }                   
              />
            </div>              
            <div style={formFieldStyle}>
              <SubmitPost type="submit" onClick={this.handleSubmit}>Submit</SubmitPost>
            </div>
          </form>             
      </div>
    )
  }
}

export default AddPost;