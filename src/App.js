import { useState } from "react";
import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
import firebaseApp from "./firebase/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `userFirebase/${uid}`);
    const docCrypt = await getDoc(docuRef);
    const infoFinal = docCrypt.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(userfirebase) {
    getRol(userfirebase.uid).then((rol) => {
      const userData = {
        uid: userfirebase.uid,
        email: userfirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }




  onAuthStateChanged(auth, (userfirebase) => {
    if (userfirebase) {
      //setUser(userfirebase);
     // console.log('from app.js :', userfirebase);
     if (!user) {
      setUserWithFirebaseAndRol(userfirebase);
    }
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Home user={user} /> : <Login />}</>;
}

export default App;
