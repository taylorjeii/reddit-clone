import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.handleDownvote = this.handleDownvote.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
  }
  handleUpvote = (post, key) => {
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      postBody: post.postBody,
      postDate: post.postDate,
      upvote: post.upvote + 1,
      downvote: post.downvote,
    });
  };

  handleDownvote = (post, key) => {    
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      postBody: post.postBody,
      postDate: post.postDate,
      upvote: post.upvote,
      downvote: post.downvote + 1,
    });
  };

  render() {
    const { posts } = this.props;
    let self = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    const PostPageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const PostWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 30rem;
      background-color: #598234;
      margin: 1rem 0;
      padding-bottom: 2rem;
      box-shadow: 0px 0px 3px #222;
    `;

    const PostTitle = styled.h1`
      font-family: 'Alegreya', serif;
      color: #FFF;
      text-transform: capitalize;
      margin-bottom: 0;
    `;

    const VoteCountWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      width: 20rem;
    `;

    const VoteCount = styled.p`
      color: #FFF;
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
      color: #FFF;
    `;

    console.log(posts);
    return (
      <PostPageContainer>
        {Object.keys(posts).map(key => (
          <PostWrapper key={key} id="postWrapper">
            <PostHeader>
              <PostTitle>{posts[key].title}</PostTitle>
              <PostDate>{posts[key].postDate}</PostDate>
            </PostHeader>
            <PostTextWrapper>
              <PostText>{posts[key].postBody}</PostText>
            </PostTextWrapper>
            <VoteCountWrapper>
              <VoteCount>Likes: {posts[key].upvote}</VoteCount>
              <VoteCount>Dislikes: {posts[key].downvote}</VoteCount>
            </VoteCountWrapper>
            <VoteButtonWrapper>
              <LikeButton iconType="fa-thumbs-o-up" onClick={ () => self.handleUpvote(posts[key], key)} />
              <LikeButton iconType="fa-thumbs-o-down" onClick={ () => self.handleDownvote(posts[key], key)} />
            </VoteButtonWrapper>
          </PostWrapper>
        ))}
      </PostPageContainer>
    );
  }
}
Posts.defaultProps = {
  posts: [],
  loading: false,
};
Posts.propTypes = {
  firebase: PropTypes.shape(),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};

export default Posts;
