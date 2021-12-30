import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC4IBKd47pSOsjklgWrxv9jrxRUBR9TODE",
    authDomain: "netflix-clone-1-49497.firebaseapp.com",
    projectId: "netflix-clone-1-49497",
    storageBucket: "netflix-clone-1-49497.appspot.com",
    messagingSenderId: "632578084747",
    appId: "1:632578084747:web:c0c6ab813a771f5ab7298e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { auth };
  export default db;