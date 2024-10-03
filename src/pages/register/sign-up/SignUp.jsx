import React from "react";
import { db } from "../../../db/db";
import "../style.css";
import { Link } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";

const SignUp = () => {
  const [usernameProps, resetUsername] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [emailProps, resetEmail] = useInput("");

  async function handleAddUser(e) {
    e.preventDefault();

    const usernameValue = usernameProps.value;
    const passwordValue = passwordProps.value;
    const emailValue = emailProps.value;

    try {
      let id;
      if (usernameValue && emailValue) {
        id = await db.user.add({
          usernameValue,
          passwordValue,
          emailValue,
        });
      } else {
        alert(" Please Complete the inputs ");
      }

      resetUsername();
      resetPassword();
      resetEmail();
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
            {...usernameProps}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
            {...passwordProps}
          />
          <input
            type="email"
            className="email-input"
            placeholder="email"
            {...emailProps}
          />
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/sign-in">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
