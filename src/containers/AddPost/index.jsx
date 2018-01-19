import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.handlePostTitleChange = this.handlePostTitleChange.bind(this);
    this.handlePostBodyChange = this.handlePostBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printFormValues = this.printFormValues.bind(this);
  }

  state = {
    title: '',
    postBody: '',
  };

  handlePostTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handlePostBodyChange = (e) => {
    this.setState({
      postBody: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      downvote: 0,
      title: this.state.title,
      postBody: this.state.postBody,
      postDate: moment().format("MMM Do YYYY"),
      upvote: 0,
    });

    this.setState({
      title: '',
    });
  };

  printFormValues = (values) => {
    console.log(values);
  };

  render() {
    const Header = styled.h1`
      color: #fff;
      font-family: 'Alegreya', serif;
    `;

    const SubmitPost = styled.button`
      background-color: #aebd38;
      border: 1px solid #fff;
      color: #fff;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 1rem;
      letter-spacing: 1px;
      margin: 0 0.5rem;
      padding: 0.5rem;
      transition: all 0.2s ease-out;

      &:hover {
        background-color: #598234;
        border-color: #598234;
      }
    `;

    const addPostContainerStyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    };

    const formLabelStyle = {
      color: '#FFF',
      display: 'block',
      fontFamily: 'Alegreya, serif',
    };

    const formFieldStyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem',
    };

    const textInputStyles = {
      height: '24px',
      lineHeight: '1.5',
      width: '100%',
    };

    return (
      <div className="add-post-container" style={addPostContainerStyle}>
        <Header>Add A New Post</Header>
        <form onSubmit={submittedValues => console.log(submittedValues)} id="form">
          <div className="form-field" style={formFieldStyle}>
            <label style={formLabelStyle} htmlFor="post-title">
              Post Title
              <input
                type="text"
                field="postTitle"
                id="post-title"
                style={textInputStyles}
                onChange={this.handlePostTitleChange}
                value={this.state.title}
              />
            </label>
          </div>
          <div className="form-field" style={formFieldStyle}>
            <label style={formLabelStyle} htmlFor="hello">
              Post Body
              <textarea
                type="text"
                rows="10"
                cols="50"
                field="hello"
                id="hello"
                onChange={this.handlePostBodyChange}
                value={this.state.postBody}
              />
            </label>
          </div>

          <div style={formFieldStyle}>
            <SubmitPost type="submit" onClick={this.handleSubmit}>
              Submit
            </SubmitPost>
          </div>
        </form>
      </div>
    );
  }
}

AddPost.propTypes = {
  firebase: PropTypes.shape().isRequired,
};

export default AddPost;
