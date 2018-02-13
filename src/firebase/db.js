import { db } from './firebase';

// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const getDatabase = () => db;
export const getAllPosts = () => db.ref('posts');
export const onceGetUsers = () => db.ref('users').once('value');
