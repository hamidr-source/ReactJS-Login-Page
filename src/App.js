import React, { useState } from "react";
import { db } from "../src/db/db";
import { useLiveQuery } from "dexie-react-hooks";

const App = ({ defaultemail } = { defaultemail: 1 }) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState(defaultemail);
  const [status, setStatus] = useState("");
  console.log(db)
  async function addStudent() {
 
    try {
      let id;
      if (name && email) {
        id = await db.user.add({
          name,
          email,
        });
      } else {
        alert(" provemaile name and email field of student ");
      }
      setStatus(`Student ${name} successfully added. Got email ${email}`);
      setName("");
      setemail(defaultemail);
    } catch (error) {
      console.log(error)
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <>
      <h1> Add stduent </h1>
      <p>{status}</p>
      Name:
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      email:
      <input
        type="number"
        value={email}
        onChange={(ev) => setemail(ev.target.value)}
      />
      <button onClick={addStudent}>Add</button>
      <div className="">
        <h1>Student listing </h1>
        <div className="">
          {db.Table}
        </div>
      </div>
    </>
  );
};

export default App;
