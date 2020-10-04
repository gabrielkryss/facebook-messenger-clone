import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBmc2-DjZw_HAc0HD4gM647zrl2axw2pW4",
  authDomain: "facebook-messenger-clone-15e97.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-15e97.firebaseio.com",
  projectId: "facebook-messenger-clone-15e97",
  storageBucket: "facebook-messenger-clone-15e97.appspot.com",
  messagingSenderId: "22652979869",
  appId: "1:22652979869:web:235add0d9806c554ffe274",
	measurementId: "G-08JDGMV1KX"
})

const db = firebase.firestore();

export default db;
    