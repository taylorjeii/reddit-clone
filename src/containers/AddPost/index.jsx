import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { firebase, db } from '../../firebase';
import { db } from '../../firebase';
import TextInput from '../../components/FormControls/TextInput';
import TextBox from '../../components/FormControls/TextBox';
import SubmitButton from '../../components/FormControls/SubmitButton';
// import ErrorNotification from '../../components/FormControls/ErrorNotification';
// import { auth } from 'firebase';

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

const Header = styled.h1`
  color: #fff;
  font-family: 'Alegreya', serif;
`;

const PleaseLogin = styled.h1`
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handlePostTitleChange = e => {
    this.setState({
      title: e.target.value
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
    const { authUser } = this.context;
    const { title, postBody } = this.state;
    const isInvalid = title === '' || postBody === '';

    if (authUser) {
      return (
        <AddPostContainer>
          <Header>Add A New Post</Header>
          <Form onSubmit={submittedValues => console.log(submittedValues)} id="form">
            <TextInput
              value={title}
              onChange={this.handlePostTitleChange}
              type="text"
              placeholder="Post Title"
            />
            <TextBox
              type="text"
              rows="10"
              columns="50"
              onChange={this.handlePostBodyChange}
              value={postBody}
              placeholder="Enter a your post content"
            />
            <SubmitButton disabled={isInvalid} type="submit" text="Add Post" />
          </Form>
        </AddPostContainer>
      );
    }

    return <PleaseLogin>Sorry, Please Login</PleaseLogin>;
  }
}

AddPost.propTypes = {
  firebase: PropTypes.shape()
};

AddPost.contextTypes = {
  authUser: PropTypes.object
};

export default AddPost;
