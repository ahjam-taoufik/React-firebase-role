import React, { useState } from "react";
import firebaseApp from "../firebase/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

const Login = () => {
//=====================================
const firestore = getFirestore(firebaseApp);
const [isRegister, setIsRegister] = useState(false);

async function registerUer(email, password, rol) {
  const userInfo = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).then((user) => {
    return user;
  });
  console.log(userInfo.user.uid);
  const docuRef = doc(firestore, `userFirebase/${userInfo.user.uid}`);
  setDoc(docuRef, { email:email,rol: rol });
}

function submitHandler(e) {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  const rol = e.target.elements.rol.value;

  console.log("submit", email, password, rol);

  if (isRegister) {
    // registrar
    registerUer(email, password, rol);
  } else {
    // login
    signInWithEmailAndPassword(auth, email, password);
  }
}


//======================================
  return (
  <div>
      <h1>{isRegister ? "Regístrate" : "Inicia sesión"}</h1>

      <form onSubmit={submitHandler}>
        <label>
          Email:
          <input type="email" id="email" />
        </label>

        <label>
          password:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegister ? "register" : "login"}
        />
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "login" : "register"}
      </button>
  </div>
  );
};

export default Login;
