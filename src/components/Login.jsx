import { useState } from "react";
import { NavLink } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase-config";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="FormApp">
      <div>
      <p>
        <font size="5" > Register User </font>
        </p>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <input
          placeholder="Confirm Password..."
        />
        
        <button onClick={register}> Create User</button>
      </div>

      <div>
      <br></br>
      <p>
      <font size="5" > Login </font>
      </p>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        
        <button onClick={login}> Login</button>
      </div>
      
      <a className="login-form-forgot" href="">
               Forgot password
      </a>
      <p>
      <NavLink to="/register">Click here to Buy or Sell</NavLink>
      </p>
      <p>
      <h4> User Logged In: </h4>
      {user?.email}
      </p> 
      
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Login;
