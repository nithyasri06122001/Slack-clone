import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyCAId8LMTManPcpyUq7IhQDTdVNSRtivAA",
    authDomain: "slack-clone-9a688.firebaseapp.com",
    projectId: "slack-clone-9a688",
    storageBucket: "slack-clone-9a688.appspot.com",
    messagingSenderId: "1059746671259",
    appId: "1:1059746671259:web:dced56f6980ae84721343e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;