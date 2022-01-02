import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [emailNotifications, setEmailNotifications] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} /> <br />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        </label>
        <label>
          Phone Number
          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /> <br />
        </label>
      </form>
    </>
  );
}

export default App;
