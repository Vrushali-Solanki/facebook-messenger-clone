import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCbTODYpfdHaRGnad3yd0qdIhiPyzkAbsE",
        authDomain: "facebook-messenger-clone-2296a.firebaseapp.com",
        projectId: "facebook-messenger-clone-2296a",
        storageBucket: "facebook-messenger-clone-2296a.appspot.com",
        messagingSenderId: "631956225853",
        appId: "1:631956225853:web:6eb073ba682a531a064f54",
        measurementId: "G-CNTZ98323K"
      
});

const db = firebaseApp.firestore();

export default db;