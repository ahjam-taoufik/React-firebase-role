import React from "react";   

import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Logout</button>
      {user.rol === "admin" ? <AdminView /> : <UserView />}
    </div>
  );
}

export default Home;