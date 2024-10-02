import React from "react";
import SignUp from "../pages/register/sign-up/SignUp";
import SignIn from "../pages/register/sign-in/SignIn"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
