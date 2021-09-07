import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCHLCSXzXWbExILuJeXYSwrxspkEvC_apA",
    authDomain: "classtest-ea235.firebaseapp.com",
    databaseURL: "https://classtest-ea235-default-rtdb.firebaseio.com",
    projectId: "classtest-ea235",
    storageBucket: "classtest-ea235.appspot.com",
    messagingSenderId: "84887830769",
    appId: "1:84887830769:web:6584888733605351012950"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();