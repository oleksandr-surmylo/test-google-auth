import { initializeApp } from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    getRedirectResult
} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: 'AIzaSyDubB1VUwgorebHPFaTo6uHbtGpLQ3pYW8',
//     authDomain: 'worldwise-7ee13.firebaseapp.com',
//     projectId: 'worldwise-7ee13',
//     storageBucket: 'worldwise-7ee13.firebasestorage.app',
//     messagingSenderId: '299039167094',
//     appId: '1:299039167094:web:bb9152431b26c56beac557',
//     measurementId: 'G-F5BLCEPJRH',
// };

const firebaseConfig = {
    apiKey: "AIzaSyCqDhydyr32MzD5BHbk5b4aRcIbtuya6pg",
    authDomain: "test-1bea6.firebaseapp.com",
    projectId: "test-1bea6",
    storageBucket: "test-1bea6.firebasestorage.app",
    messagingSenderId: "606740596505",
    appId: "1:606740596505:web:ba6c317e465c37cd0fa788",
    measurementId: "G-BXC0DXXLRY"
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );
export const auth = getAuth ( app );
export const provider = new GoogleAuthProvider ();

provider.setCustomParameters ( {
    prompt: 'select_account'
} );

export const signWithGoogleRedirect = () => signInWithRedirect ( auth, provider )
export const signWithGooglePopup = () => signInWithPopup ( auth, provider )
export const getRedirectGoogleResult = () => getRedirectResult ( auth );






