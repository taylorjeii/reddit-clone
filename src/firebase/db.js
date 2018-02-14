import { db } from './firebase';
import moment from 'moment';

export const upVotePost = (post, key) =>
  db.ref(`posts/${key}`).set({
    title: post.title,
    postBody: post.postBody,
    postDate: post.postDate,
    postedBy: post.postedBy,
    upvote: post.upvote + 1,
    downvote: post.downvote
  });

export const downVotePost = (post, key) =>
  db.ref(`posts/${key}`).set({
    title: post.title,
    postBody: post.postBody,
    postDate: post.postDate,
    postedBy: post.postedBy,
    upvote: post.upvote,
    downvote: post.downvote + 1
  });

export const addPost = (postBody, postedBy, title) => {
  db.ref('posts').push({
    downvote: 0,
    postBody: postBody,
    postDate: moment().format('MMM Do YYYY'),
    postedBy: postedBy,
    title: title,
    upvote: 0
  });
};

export const getDatabase = () => db;

export const getAllPosts = () => db.ref('posts');
