import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBeGhpMXGz_1yfYjwYDd0JHRG0a6yHLve4',
  authDomain: 'reddit-clone-4186c.firebaseapp.com',
  databaseURL: 'https://reddit-clone-4186c.firebaseio.com',
  messagingSenderId: '996838905727',
  projectId: 'reddit-clone-4186c',
  storageBucket: 'reddit-clone-4186c.appspot.com'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

// const auth = firebase.auth();
const db = firebase.database();
export { db };
