import  firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCsnT-oC7xgxA4hr9samFAF9cdn5G6FH10",
    authDomain: "crwn-db-92cba.firebaseapp.com",
    projectId: "crwn-db-92cba",
    storageBucket: "crwn-db-92cba.appspot.com",
    messagingSenderId: "1008553280672",
    appId: "1:1008553280672:web:942eeef5d8c3e43bd375c5",
    measurementId: "G-N5T89QYCQ9"
  };
  export const createUserProfileDocument = async(userAuth, additionalData)=>{
          if(!userAuth) return;

         const userRef = firestore.doc(`users/${userAuth.uid}`);
         const snapShot = await userRef.get();
        if(!snapShot.exists){
          // create it
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({

              displayName,
              email,
              createdAt,
              ...additionalData
            })
          } catch(error){
              console.log("error creating users", error.message)
          }
        
        }
        return userRef;
  };
  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;