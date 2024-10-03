import React from "react";
import { db } from "../../../db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useNavigate, Link } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";

const SignIn = () => {
  const [username, resetUsername] = useInput("");
  const users = useLiveQuery(() => db.user.toArray());
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();

    let currentUser = users?.find((user) => {
      return user.name === username.value;
    });

    users?.forEach((user) => {
      if (
        currentUser.password === user.password &&
        currentUser.email === user.email
      ) {
        navigate("/dashboard");
      }
    });

    resetUsername();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            className="username-input"
            placeholder="username"
            {...username}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
          />
          <input type="email" className="email-input" placeholder="email" />
          <button onClick={(e) => handleSignIn(e)}>login</button>
          <p className="message">
            Not registered?
            <Link to="/sign-up">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
