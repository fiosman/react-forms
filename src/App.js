import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [isInstructor, setIsInstructor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [bio, setBio] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name is ${name}`);
    console.log(`email is ${email}`);
    console.log(`phoneNumber is ${phoneNumber}`);
    console.log(`phoneType is ${phoneType}`);
    console.log(`is instructor? ${isInstructor}`);
    console.log(`is student? ${isStudent}`);
    console.log(`bio is ${bio}`);
    console.log(`email subscription? ${emailChecked}`);
  };

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
        <label>
          Phone type
          <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
            {" "}
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>{" "}
          <br />
        </label>
        <label>
          Bio
          <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          <br />
        </label>
        <label>
          Email subscription
          <input
            type="checkbox"
            value={emailChecked}
            onChange={() => setEmailChecked(!emailChecked)}
            checked={emailChecked}
          />
        </label>{" "}
        <br />
        <label>
          <input
            type="radio"
            name="staffGroup"
            value={isInstructor}
            onChange={() => setIsInstructor(!isInstructor)}
          />
          Instructor
          <input
            name="staffGroup"
            type="radio"
            value={isStudent}
            onChange={() => setIsStudent(!isStudent)}
          />
          Student
        </label>
        <input type="submit" value="Send Data" />
      </form>
    </>
  );
}

export default App;
