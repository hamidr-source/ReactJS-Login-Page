import React, { useState } from "react";
import { db } from "../src/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import SignIn from "./pages/register/sign-in/SignIn";

const App = () => {
 return (
  <>
  <SignIn />
  </>
 )

};

export default App;
