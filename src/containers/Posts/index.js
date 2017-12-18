import React, { Component } from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  }
  
  render() {
    let { posts } = this.props;
    let _this = this;

    if(!posts){
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    const PostPageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

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
    text-transform: capitalize ;
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

    const PostText = styled.p`
      color: #FFF;
      font-family: 'Roboto', sans-serif;
    `;

    const PostTextWrapper = styled.div`
      text-align: justify;
      padding: 0 1rem;
    `;

    return (
      <PostPageContainer>
        { Object.keys(posts).map( key => {
          return (
            <PostWrapper key={key} id="postWrapper">
              <PostTitle>{ posts[key].title }</PostTitle>
              <PostTextWrapper>
                <PostText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper erat justo, vel hendrerit quam rutrum in. Sed id efficitur odio. Etiam orci ante, elementum eget nibh in, efficitur dapibus libero. Aenean velit arcu, elementum ac diam vel, finibus posuere eros. Aliquam ut sagittis elit. 
                </PostText>
             </PostTextWrapper>
             <VoteCountWrapper>
              <VoteCount>Likes: {posts[key].upvote}</VoteCount>
              <VoteCount>Dislikes: {posts[key].downvote}</VoteCount>
            </VoteCountWrapper>
              <VoteButtonWrapper>
                <LikeButton iconType="fa-thumbs-o-up" onClick={ _this.handleUpvote.bind(this, posts[key], key) }/>
                <LikeButton iconType="fa-thumbs-o-down" onClick={ _this.handleDownvote.bind(this, posts[key], key) }/>
            </VoteButtonWrapper>                           
            </PostWrapper>
          );
        })}
      </PostPageContainer>
    )
  }
}

export default Posts;