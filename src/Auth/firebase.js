import firebase from "firebase";

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
    apiKey: "AIzaSyCIhWurxHMngQMnAA-lzqJuxpy6pmYoNB0",
    authDomain: "netflix-clone-in.firebaseapp.com",
    projectId: "netflix-clone-in",
    storageBucket: "netflix-clone-in.appspot.com",
    messagingSenderId: "664633454638",
    appId: "1:664633454638:web:132f55f3119b34b89aefbf"
  };

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
