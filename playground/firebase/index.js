import firebase from 'firebase';
var config = {
   apiKey: "AIzaSyBFz6mhCYSDRiDUy_MnuG9qrWV_hzwHOeE",
   authDomain: "ricetodoapp.firebaseapp.com",
   databaseURL: "https://ricetodoapp.firebaseio.com",
   projectId: "ricetodoapp",
   storageBucket: "ricetodoapp.appspot.com",
   messagingSenderId: "827806894110"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Matt',
    age: 20
  }

});

firebaseRef.child('user').on('value', (snapshot)=>{
  console.log("UPDATE", snapshot.val());
});
firebaseRef.child('user').update({
  name: 'Mike'
});
firebaseRef.child('app').update({
  name: 'TodoApplication'
});
