import { shouldForwardProp } from "@mui/styled-engine";
import React from "react";
import { signInWithGoogle } from "./firebase";


export default function Header() {
  if (sessionStorage.getItem("email") == null) {
    return (
      <header>
        <h1>Noteaza</h1>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      </header>
    );
  }
  else{
    return (
      <header>
      <h1>{sessionStorage.getItem("name")}</h1>
      <h1>{sessionStorage.getItem("email")}</h1>
      <img src={sessionStorage.getItem("profilePic")}/>
      <button onClick={logout}> Logout</button>
      </header>
    );
  }
  function logout(){
    sessionStorage.clear();
  }
  
}
