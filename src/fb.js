import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/storage' 

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBWaJJ27jFN_sA7sCuCCx_yy7mR6YcdlaM",
    authDomain: "gdg-umuahia-a5197.firebaseapp.com",
    databaseURL: "https://gdg-umuahia-a5197.firebaseio.com",
    projectId: "gdg-umuahia-a5197",
    storageBucket: "gdg-umuahia-a5197.appspot.com",
    messagingSenderId: "598735080054",
    appId: "1:598735080054:web:381b4e091fd2a3dc322d57",
    measurementId: "G-8ZNPTCFWCM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


  const db = firebase.firestore() ;  

//   db.settings({
//       timestampsInSnapshots: true
//   })

  export default db 