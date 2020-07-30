import firebase from 'firebase';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyD7fLudyhsSnYX0NiRTUvLlyW38Fa1H0pE",
    authDomain: "chat-75152.firebaseapp.com",
    databaseURL: "https://chat-75152.firebaseio.com",
    projectId: "chat-75152",
    storageBucket: "chat-75152.appspot.com",
    messagingSenderId: "659451523620",
    appId: "1:659451523620:web:1d1671bf09f23dd1e09eb1",
    measurementId: "G-G3NMVQTLRV"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
    firebase
};