import React from "react";
import "./App.css";
import { useMappedState } from "./useMappedState";

const AppThree = props => {
  const [{ firstName, lastName, email }, setProperty] = useMappedState({
    firstName: "",
    lastName: "",
    email: ""
  });
  // const [{ firstName, lastName, email }, setProperty] = useMappedState( useMappedState([
  //   ["firstName", ""],
  //   ["lastName", ""],
  //   ["email", ""]
  // ]);

  const { firstNameField, lastNameField, emailField } = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email"
  };

  const onInputChange = evt => {
    setProperty(evt.target.name, evt.target.value);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <label htmlFor={firstNameField}>First Name</label>
        <input
          id={firstNameField}
          value={firstName}
          onChange={onInputChange}
          name="firstName"
        />
      </div>
      <div>
        <label htmlFor={lastNameField}>Last Name</label>
        <input
          id={lastNameField}
          value={lastName}
          onChange={onInputChange}
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor={emailField}>Email</label>
        <input
          id={emailField}
          value={email}
          onChange={onInputChange}
          name="email"
        />
      </div>
    </div>
  );
};

export default AppThree;
