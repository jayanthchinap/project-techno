import { Component } from "react";
import axios from "axios";

import "./index.css";

class Create extends Component {
  state = {
    firstName: "",
    lastName: "",
    dob: "",
    skill: "",
    available: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, dob, skill, available } = this.state;
    axios
      .post("http://localhost:5000/users/", {
        firstName,
        lastName,
        DOB: dob,
        skill,
        available,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onChangeFunc = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    console.log(this.state);

    return (
      <div className="main-container">
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={this.onSubmit}>
            <h1 className="transaction-header">Candidates Portal</h1>
            <label className="input-label" htmlFor="firstName">
              FULL NAME
            </label>
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              id="firstName"
              name="firstName"
              onChange={this.onChangeFunc}
              value={firstName}
            />
            <label className="input-label" htmlFor="lastname">
              LAST NAME
            </label>
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              id="lastname"
              name="lastName"
              onChange={this.onChangeFunc}
              value={lastName}
            />
            <label className="input-label" htmlFor="dob">
              DOB
            </label>
            <input
              type="date"
              name="dob"
              className="input"
              placeholder="DOB"
              id="dob"
              onChange={this.onChangeFunc}
            />
            <label className="input-label" htmlFor="skill">
              SKILL
            </label>
            <input
              type="text"
              className="input"
              name="skill"
              placeholder="Skill"
              id="skill"
              onChange={this.onChangeFunc}
            />

            <div className="dist">
              <label className="input-label" htmlFor="radio">
                AVAILABLE :
              </label>
              <input
                type="radio"
                id="yes"
                name="available"
                value="yes"
                onChange={this.onChangeFunc}
                defaultChecked
              ></input>
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="available"
                value="no"
                onChange={this.onChangeFunc}
              ></input>
              <label htmlFor="no">No</label>
              <br />
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Create;
