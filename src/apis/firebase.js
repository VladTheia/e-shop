import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(googleProvider);
}

export const signOut = function() {
    return firebase.auth().signOut();
}