import firebase from 'firebase';


try{
  var config = {
     apiKey: "AIzaSyBFz6mhCYSDRiDUy_MnuG9qrWV_hzwHOeE",
     authDomain: "ricetodoapp.firebaseapp.com",
     databaseURL: "https://ricetodoapp.firebaseio.com",
     projectId: "ricetodoapp",
     storageBucket: "ricetodoapp.appspot.com",
     messagingSenderId: "827806894110"
   };
   firebase.initializeApp(config);
} catch(e) {


}

export var firebaseRef = firebase.database().ref();
export default firebase;
