import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB02euR3GjWWx6WC95zprggTBg0jNteOFg",
    authDomain: "login-c80c9.firebaseapp.com",
    projectId: "login-c80c9",
    storageBucket: "login-c80c9.appspot.com",
    messagingSenderId: "334063014565",
    appId: "1:334063014565:web:b282ea622e6f1f9eb1f34c"
  };



  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);