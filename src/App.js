import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt) {
    this.setState({
      form: { ...this.state.form, [evt.target.name]: evt.target.value }
    });
  }

  render() {
    const { firstName, lastName, email } = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email"
    };
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>
          <label for={firstName}>First Name</label>
          <input
            id={firstName}
            value={this.state.form[firstName]}
            onChange={this.onInputChange}
            name={firstName}
          />
        </div>
        <div>
          <label for={lastName}>Last Name</label>
          <input
            id={lastName}
            value={this.state.form[lastName]}
            onChange={this.onInputChange}
            name={lastName}
          />
        </div>
        <div>
          <label for={email}>Email</label>
          <input
            id={email}
            value={this.state.form[email]}
            onChange={this.onInputChange}
            name={email}
          />
        </div>
      </div>
    );
  }
}

export default App;
