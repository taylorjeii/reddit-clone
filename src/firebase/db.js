import { db } from './firebase';

// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email
//   });

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

export const getDatabase = () => db;

export const getAllPosts = () => {
  return db.ref('posts');
  // var a = db.ref('posts').on('value', snapshot => {
  //   return snapshot.val();
  // });
  // console.log(a);
};
