// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.9.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.9.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool)
// npm install -g firebase-tools
// Deploy to Firebase Hosting
// Sign in to Google: firebase login
// Initiate your project: firebase init
// Specify your site in firebase.json:
// "site": "myeasynote",
// When you’re ready, deploy your web app: firebase deploy --only hosting:myeasynote
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCv_8Uk2Fkg1hy0qDnVQDoM9imwnO2hENg",
    authDomain: "myeasynote1109.firebaseapp.com",
    databaseURL: "https://myeasynote1109.firebaseio.com",
    projectId: "myeasynote1109",
    storageBucket: "myeasynote1109.appspot.com",
    messagingSenderId: "30152060228",
    appId: "1:30152060228:web:8f77da3c1242b4e454bb11",
    measurementId: "G-0K4H91869W"
};
firebase.initializeApp(firebaseConfig);
export const firebaseConnect = firebase.database().ref('/');
//get data
// var data=firebase.database().ref('/');
// data.once('value').then((snapshot) => {
//     console.log(snapshot.val());
// });

// edit data
// var dataEdit = firebase.database().ref('/note1');
// dataEdit.set({
//     id: 4
// })
// add data
// delete data : dataDelete.child('ten id').remove()