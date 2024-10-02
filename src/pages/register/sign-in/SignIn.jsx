import React, { useState } from "react";
import { db } from "../../../db/db";
import { useLiveQuery } from "dexie-react-hooks";

const SignIn = () => {
  const users = useLiveQuery(() => db.user.toArray());
  const [userEmail, setUserEmail] = useState("");
  console.log(users);
  users.forEach((user) => {
    if (user.email === userEmail) {
      console.log(userEmail);
    }
  });

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            className="username-input"
            placeholder="username"
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
          />
          <input
            type="email"
            className="email-input"
            placeholder="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button>login</button>
          <p className="message">Already have an account?</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
