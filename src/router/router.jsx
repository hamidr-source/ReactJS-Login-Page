import React from "react";
import SignUp from "../pages/register/sign-up/SignUp";
import SignIn from "../pages/register/sign-in/SignIn"
import Dashboard from "../pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
