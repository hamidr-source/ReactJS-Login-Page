import React from "react";
import SignUp from "../pages/register/sign-up/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
