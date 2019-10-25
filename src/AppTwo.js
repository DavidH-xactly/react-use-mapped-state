import React, { useState } from "react";
import "./App.css";

const AppTwo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { firstNameField, lastNameField, emailField } = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email"
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <label for={firstNameField}>First Name</label>
        <input
          id={firstNameField}
          value={firstName}
          onChange={evt => setFirstName(evt.target.value)}
          name={firstNameField}
        />
      </div>
      <div>
        <label for={lastNameField}>Last Name</label>
        <input
          id={lastNameField}
          value={lastName}
          onChange={evt => setLastName(evt.target.value)}
          name={lastNameField}
        />
      </div>
      <div>
        <label for={emailField}>Email</label>
        <input
          id={emailField}
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          name={emailField}
        />
      </div>
    </div>
  );
};

export default AppTwo;
