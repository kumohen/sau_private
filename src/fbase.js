import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

var firebaseConfig = {
    
};



firebase.initializeApp(firebaseConfig)




export const storage = firebase.storage()
export const database = firebase.database()

//export const db = firebase.database()




