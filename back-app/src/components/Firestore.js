import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4kum0ogT4Q07lvAeIL-Pc5TSafjVvwLU",
    authDomain: "back-cool.firebaseapp.com",
    databaseURL: "https://back-cool.firebaseio.com",
    projectId: "back-cool",
    storageBucket: "back-cool.appspot.com",
    messagingSenderId: "136443490055",
    appId: "1:136443490055:web:e245d0f18306129b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;