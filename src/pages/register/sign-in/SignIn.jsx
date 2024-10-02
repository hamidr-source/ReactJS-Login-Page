import React, { useState } from "react";
import { db } from "../../../db/db";
import "../style.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleAddUser(e) {
    e.preventDefault()

    try {
      let id;
      if (name && email) {
        id = await db.user.add({
          name,
          password,
          email,
        });

      } else {
        alert(" Please Complete the inputs ");
      }

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            className="username-input"
            placeholder="username"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="email"
            className="email-input"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={(e) => handleAddUser(e)}>login</button>
          <p className="message">
            Not registered? <a href="sign-in.html">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
