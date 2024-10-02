import React from "react";
import "../style.css"

const SignIn = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" className="username-input" placeholder="username" />
          <input
            type="password"
            className="password-input"
            placeholder="password"
          />
          <input type="email" className="email-input" placeholder="email" />
          <button>login</button>
          <p className="message">
            Not registered? <a href="sign-in.html">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
