import firebase from 'firebase'


  // The web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDAN7TumQvGjvAwDi8yGDBx7_slKbiZESU",
    authDomain: "picpanoproject.firebaseapp.com",
    projectId: "picpanoproject",
    storageBucket: "picpanoproject.appspot.com",
    messagingSenderId: "969284120672",
    appId: "1:969284120672:web:3f6b5b3f47eacdb5025305"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire