import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { db } from '../../firebase/';
import LikeButton from '../../components/LikeButton';

const LoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  > h1 {
    color: #fff;
  }
`;

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      loading: true
    };
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  componentWillMount() {
    db.getAllPosts().on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }

  handleUpvote = (post, key) => db.upVotePost(post, key);
  handleDownvote = (post, key) => db.downVotePost(post, key);

  render() {
    const { posts } = this.state;

    if (!posts) {
      return (
        <LoadingWrapper>
          <h1>Loading...</h1>
        </LoadingWrapper>
      );
    }

    const PostPageContainer = styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
    `;

    const PostWrapper = styled.div`
      align-items: center;
      background-color: #598234;
      box-shadow: 0px 0px 3px #222;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin: 1rem 0;
      padding-bottom: 2rem;
      width: 30rem;
    `;

    const PostTitle = styled.h1`
      color: #fff;
      font-family: 'Alegreya', serif;
      margin-bottom: 0;
      text-align: center;
      text-transform: capitalize;
    `;

    const VoteCountWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      width: 20rem;
    `;

    const VoteCount = styled.p`
      color: #fff;
      font-family: 'Roboto', sans-serif;
    `;

    const VoteButtonWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      width: 20rem;
    `;

    const PostHeader = styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    `;

    const PostText = styled.p`
      color: #fff;
      font-family: 'Roboto', sans-serif;
    `;

    const PostTextWrapper = styled.div`
      text-align: justify;
      padding: 0 1rem;
    `;

    const PostDate = styled.small`
      color: #fff;
    `;

    const PostedBy = styled.small`
      color: #fff;
      font-style: italic;
    `;

    return (
      <PostPageContainer>
        {Object.keys(posts)
          .map(key => (
            <PostWrapper key={key} id="postWrapper">
              <PostHeader>
                <p> </p>
                <PostTitle>{posts[key].title}</PostTitle>
                <PostDate>{posts[key].postDate}</PostDate>
                <PostedBy>Posted By: {posts[key].postedBy}</PostedBy>
              </PostHeader>
              <PostTextWrapper>
                <PostText>{posts[key].postBody}</PostText>
              </PostTextWrapper>
              <VoteCountWrapper>
                <VoteCount>Likes: {posts[key].upvote}</VoteCount>
                <VoteCount>Dislikes: {posts[key].downvote}</VoteCount>
              </VoteCountWrapper>
              <VoteButtonWrapper>
                <LikeButton iconType="fa-thumbs-o-up" onClick={() => this.handleUpvote(posts[key], key)} />
                <LikeButton iconType="fa-thumbs-o-down" onClick={() => this.handleDownvote(posts[key], key)} />
              </VoteButtonWrapper>
            </PostWrapper>
          ))
          .reverse()}
      </PostPageContainer>
    );
  }
}

export default Posts;
