import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {

    apiKey: "AIzaSyAw0IEkazZ0aJoDEoyUeJ9eOwi4XwRUdys",
  
    authDomain: "crown-clothing-c1f43.firebaseapp.com",
  
    projectId: "crown-clothing-c1f43",
  
    storageBucket: "crown-clothing-c1f43.appspot.com",
  
    messagingSenderId: "454006429000",
  
    appId: "1:454006429000:web:dd799a8111fdf695ba4f7d"
  
  };

  //requesting data from our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
 //if the user does not exist 
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get(); //gets user id

  //if it doesn't exist, we create that piece of data
  if(!snapShot.exits){
    //user and email from userAuth
    const {displayName, email} = userAuth;
    //we get current date and time
    const createdAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    });
  } catch (error){
    console.log('error creating user', error.message)
    }
  }
return userRef;
};
  firebase.initializeApp(config);
//Google Auth
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;