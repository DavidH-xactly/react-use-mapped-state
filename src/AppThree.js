import React from "react";
import "./App.css";
import { useMappedState } from "./useMappedState";

const AppThree = () => {
  const [{ firstName, lastName, email }, setProperty] = useMappedState({
    firstName: "",
    lastName: "",
    email: ""
  });
  // const [{ firstName, lastName, email }, setProperty] = useMappedState([
  //   ["firstName", ""],
  //   ["lastName", ""],
  //   ["email", ""]
  // ]);

  const onInputChange = evt => {
    setProperty(evt.target.name, evt.target.value);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <label htmlFor={"firstName"}>First Name</label>
        <input
          id={"firstName"}
          value={firstName}
          onChange={onInputChange}
          name="firstName"
        />
      </div>
      <div>
        <label htmlFor={"lastName"}>Last Name</label>
        <input
          id={"lastName"}
          value={lastName}
          onChange={onInputChange}
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          value={email}
          onChange={onInputChange}
          name="email"
        />
      </div>
    </div>
  );
};

export default AppThree;
