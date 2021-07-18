import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBAzNIRngGiy7uB3WT4QwTgUfOjyb_oimk",
    authDomain: "finalproject-45305.firebaseapp.com",
    projectId: "finalproject-45305",
    storageBucket: "finalproject-45305.appspot.com",
    messagingSenderId: "1075296056541",
    appId: "1:1075296056541:web:751e3fc17e52fe00cf9734",
    measurementId: "G-KP343J5XHP"
  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbBXbniosRt9VYhZCVLU2qerxFGiE0reI",
//   authDomain: "poto-ae94a.firebaseapp.com",
//   projectId: "poto-ae94a",
//   storageBucket: "poto-ae94a.appspot.com",
//   messagingSenderId: "1046183146242",
//   appId: "1:1046183146242:web:ae7667a76af3e37b00481b",
//   measurementId: "G-FF1V0Q3R1C"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  export{db,auth,storage}