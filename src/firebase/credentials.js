
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBU4RHygyBAjBJKBGHmnJoNQeVt5-TMqpk",
  authDomain: "react-firebase9-authentication.firebaseapp.com",
  projectId: "react-firebase9-authentication",
  storageBucket: "react-firebase9-authentication.appspot.com",
  messagingSenderId: "1023297033618",
  appId: "1:1023297033618:web:08e21f7ffd4ac04b985d4b",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;