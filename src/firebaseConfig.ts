import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAVJWLiK1P9-FpjDS43j_bhPGEVTboCVBk",
  authDomain: "shoutouts-2eaa0.firebaseapp.com",
  projectId: "shoutouts-2eaa0",
  storageBucket: "shoutouts-2eaa0.appspot.com",
  messagingSenderId: "44449669918",
  appId: "1:44449669918:web:6b28f3ba0a75db724f9f0f",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
