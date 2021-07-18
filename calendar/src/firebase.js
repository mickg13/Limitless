import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA3wY4D3YRLZPeFemJg5m9pFknbNUPwnrY",
    authDomain: "limitless-7f81d.firebaseapp.com",
    projectId: "limitless-7f81d",
    storageBucket: "limitless-7f81d.appspot.com",
    messagingSenderId: "27707918",
    appId: "1:27707918:web:ec839f42561e377591ca5f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore()
//   const  auth = firebase.auth()
//   export {auth,db}
const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  export{db,auth,storage}
