import React from 'react';
import  firebase  from 'firebase'


const Signin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    
    const Signinwithface = ()=>{
        firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    
    console.log(user)
  
  })
  .catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    // ...
  });
}

const SigninwithGoogleAccount = ()=>{
  firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("result")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

    return (
        <div>
            <button onClick={()=> Signinwithface()}>signinwithFacebook</button>
            <br />
            <button onClick={()=> SigninwithGoogleAccount()}>SigninwithGoogle</button>
        </div>
    );
};

export default Signin;