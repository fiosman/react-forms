import "./App.css";
import React, { useState } from "react";
import dayjs from "dayjs";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [isInstructor, setIsInstructor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [bio, setBio] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) return setValidationErrors(errors);

    console.log({
      name,
      email,
      phoneNumber,
      phoneType,
      isInstructor,
      isStudent,
      bio,
      emailChecked,
      dateSubmitted: dayjs(new Date()).format(`DD/MM/YYYY`),
    });

    setName("");
    setEmail("");
    setPhoneNumber("");
    setPhoneType("");
    setIsInstructor(false);
    setIsStudent(false);
    setBio("");
    setEmailChecked(false);
    setValidationErrors([]);
  };

  const validateForm = () => {
    let errors = [];
    const validPhoneNumber = phoneNumber.match(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    );
    const validEmail = email.match(/^\S+@\S+\.\S+$/);

    if (name.length === 0) errors.push("Name is required");
    if (bio.length > 280) errors.push("Bio cannot exceed 280 characters");
    if (!validEmail) errors.push("Email must be of valid format");
    if (!validPhoneNumber) errors.push("Phone number must be valid format");
    if (validPhoneNumber && phoneType.length === 0) errors.push("Phone type must be selected");

    return errors;
  };

  return (
    <>
      {validationErrors.length > 0 && (
        <ul>
          {validationErrors.map((validationError, index) => (
            <li key={index}>{validationError}</li>
          ))}
        </ul>
      )}
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
          <input
            value={phoneNumber}
            placeholder="e.g. 123-456-7891"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />{" "}
          <br />
        </label>
        <label>
          Phone type
          <select
            disabled={phoneNumber.length === 0}
            value={phoneType}
            onChange={(e) => setPhoneType(e.target.value)}
          >
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
