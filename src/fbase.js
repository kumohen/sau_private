import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyC4h5hiEc9q_S84xWwnOt0sxGjpw2yGwM8",
    authDomain: "node-firebase-intro-70918.firebaseapp.com",
    databaseURL: "https://node-firebase-intro-70918.firebaseio.com",
    projectId: "node-firebase-intro-70918",
    storageBucket: "node-firebase-intro-70918.appspot.com",
    messagingSenderId: "922060800579",
    appId: "1:922060800579:web:ebb0c1495d3838b4d10af6"
};



firebase.initializeApp(firebaseConfig)




export const storage = firebase.storage()
export const database = firebase.database()

//export const db = firebase.database()




