import React, { useState } from "react";
import { db } from "../../../db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useNavigate } from "react-router-dom";
import SignUp from "../sign-up/SignUp";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const users = useLiveQuery(() => db.user.toArray());
  const navigate = useNavigate();
  console.log(navigate);

  function handleSignIn(e) {
    e.preventDefault();

    let currentUser = users?.find((user) => {
      return user.name === username;
    });

    users?.forEach((user) => {
      if (
        currentUser.password === user.password ||
        currentUser.email === user.email
      ) {
        navigate("/");
      }
    });
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            className="username-input"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
          />
          <input type="email" className="email-input" placeholder="email" />
          <button onClick={(e) => handleSignIn(e)}>login</button>
          <p className="message">Already have an account?</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
