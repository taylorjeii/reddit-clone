import { auth } from './firebase';

// Sign Up
export const doCreatePasswordWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword;

// Sign Out
export const doSignOut = () => auth.signOut();

// Password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password => auth.currentUser.updatePassword(password);
