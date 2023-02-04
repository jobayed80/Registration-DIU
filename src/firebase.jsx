import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5ZhGy2qh1tOBmptiSyDAOyGrW5web9Gc",
    authDomain: "registration-diu.firebaseapp.com",
    projectId: "registration-diu",
    storageBucket: "registration-diu.appspot.com",
    messagingSenderId: "918553046341",
    appId: "1:918553046341:web:c9aa373ea1131e5cb9222c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase