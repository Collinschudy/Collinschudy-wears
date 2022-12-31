// import firebase from 'firebase/compat/app';

// import 'firebase/compat/firestore';

// import 'firebase/compat/auth';


// const config = {
//     apiKey: "AIzaSyA2c-4BW_c54LKR6ScBaEk-o0B2wgJ7pxw",
//     authDomain: "collinschudy-wears.firebaseapp.com",
//     projectId: "collinschudy-wears",
//     storageBucket: "collinschudy-wears.appspot.com",
//     messagingSenderId: "1048271166886",
//     appId: "1:1048271166886:web:1f07eafd2254dc160f4367",
//     measurementId: "G-1LMY03NLM8"
// }

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;

//     const userRef = firestore.doc(`users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

//     // console.log(snapShot.data());

//     if (!snapShot.exists) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             })
//         } catch (error) {
//             console.log('error creating user', error.message);
//         }
//     }
    
//     return userRef;
// }




// const app = firebase.initializeApp(config);

// export const auth = firebase.auth(app);
// export const firestore = firebase.firestore(app);


// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' })

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;


import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyA2c-4BW_c54LKR6ScBaEk-o0B2wgJ7pxw",
    authDomain: "collinschudy-wears.firebaseapp.com",
    projectId: "collinschudy-wears",
    storageBucket: "collinschudy-wears.appspot.com",
    messagingSenderId: "1048271166886",
    appId: "1:1048271166886:web:1f07eafd2254dc160f4367",
    measurementId: "G-1LMY03NLM8"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
     await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error.message)
    }
  }



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);
   
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
            }
    }
    return userRef;
    

}

