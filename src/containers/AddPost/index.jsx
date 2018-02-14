import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

import { db } from '../../firebase';

const INITIAL_STATE = {
  postBody: '',
  postedBy: '',
  title: ''
};

const AddPostContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: #fff;
  display: block;
  font-family: 'Alegreya, serif';
  width: 100%;
`;

const FormField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const TextInput = styled.input`
  height: 24px;
  line-height: 1.5;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.handlePostTitleChange = this.handlePostTitleChange.bind(this);
    this.handlePostBodyChange = this.handlePostBodyChange.bind(this);
    this.handlePostedByChange = this.handlePostedByChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printFormValues = this.printFormValues.bind(this);
  }

  handlePostTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handlePostedByChange = e => {
    this.setState({
      postedBy: e.target.value
    });
  };

  handlePostBodyChange = e => {
    this.setState({
      postBody: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { postBody, postedBy, title } = this.state;
    db.addPost(postBody, postedBy, title);

    this.setState({ ...INITIAL_STATE });
  };

  printFormValues = values => {
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

    return (
      <AddPostContainer>
        <Header>Add A New Post</Header>
        <form onSubmit={submittedValues => console.log(submittedValues)} id="form">
          <FormField>
            <FormLabel htmlFor="posted-by">
              Name
              <TextInput type="text" id="posted-by" onChange={this.handlePostedByChange} value={this.state.postedBy} />
            </FormLabel>
          </FormField>
          <FormField>
            <FormLabel htmlFor="post-title">
              Post Title
              <TextInput type="text" id="post-title" onChange={this.handlePostTitleChange} value={this.state.title} />
            </FormLabel>
          </FormField>
          <FormField>
            <FormLabel htmlFor="post-body">
              Post Body
              <TextArea
                type="text"
                rows="10"
                cols="50"
                id="post-body"
                onChange={this.handlePostBodyChange}
                value={this.state.postBody}
              />
            </FormLabel>
          </FormField>

          <FormField>
            <SubmitPost type="submit" onClick={this.handleSubmit}>
              Submit
            </SubmitPost>
          </FormField>
        </form>
      </AddPostContainer>
    );
  }
}

AddPost.propTypes = {
  firebase: PropTypes.shape()
};

export default AddPost;
