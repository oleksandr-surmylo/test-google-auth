import { initializeApp } from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    getRedirectResult
} from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyDubB1VUwgorebHPFaTo6uHbtGpLQ3pYW8',
    authDomain: 'worldwise-7ee13.firebaseapp.com',
    projectId: 'worldwise-7ee13',
    storageBucket: 'worldwise-7ee13.firebasestorage.app',
    messagingSenderId: '299039167094',
    appId: '1:299039167094:web:bb9152431b26c56beac557',
    measurementId: 'G-F5BLCEPJRH',
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






