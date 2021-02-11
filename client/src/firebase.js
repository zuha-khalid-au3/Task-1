import  firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBD-jOQpsiWraLns9RFQjwaKcKRa1QXcQQ",
  authDomain: "test-af8a0.firebaseapp.com",
  projectId: "test-af8a0",
  storageBucket: "test-af8a0.appspot.com",
  messagingSenderId: "68955875643",
  appId: "1:68955875643:web:0006f5b5618a81fe2e2f1e",
  measurementId: "G-JZCDE73Z1F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();