import React, { useState } from "react";
import { db } from "../../../db/db";
import "../style.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleAddUser(e) {
    e.preventDefault();

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
      <div className="form" onSubmit={(e) => handleAddUser(e)}>
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
          <button>login</button>
          <p className="message">Not registered? <Link to="/sign-in">Create an account</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
