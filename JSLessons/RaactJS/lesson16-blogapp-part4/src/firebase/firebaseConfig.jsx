import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAXJ7_jYMwvnTNi1q3amlx3PqBR-xFX21s",
    authDomain: "tartarotti-47686.firebaseapp.com",
    databaseURL: "https://tartarotti-47686-default-rtdb.firebaseio.com",
    projectId: "tartarotti-47686",
    storageBucket: "tartarotti-47686.appspot.com",
    messagingSenderId: "436798350817",
    appId: "1:436798350817:web:20ce53871c54668d245ea0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
