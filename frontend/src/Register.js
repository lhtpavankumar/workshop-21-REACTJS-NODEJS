import React, { Component } from "react";

import "./Register.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    pass: "",
    mobileNum: "",
    confirmPass: "",
    showNameError: false,
    showEmailError: false,
    showMobileError: false,
    showPassError: false,
    showConfirmPassError: false,
    RegisterData: [],
  };

  onChanges = (e) => {
    if (e.target.name === "fullName") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.name === "tel") {
      this.setState({ mobileNum: e.target.value });
    }
    if (e.target.name === "pass") {
      this.setState({ pass: e.target.value });
    }
    if (e.target.name === "confirmPass") {
      this.setState({ confirmPass: e.target.value });
    }
  };

  onBlurs = (e) => {
    if (e.target.name === "fullName") {
      if (e.target.value === "") {
        this.setState({ showNameError: true });
      } else {
        this.setState({ showNameError: false });
      }
    }

    if (e.target.name === "email") {
      if (e.target.value === "") {
        this.setState({ showEmailError: true });
      } else {
        this.setState({ showEmailError: false });
      }
    }

    if (e.target.name === "tel") {
      if (e.target.value !== "" && e.target.value.length === 10) {
        this.setState({ showMobileError: false });
      } else {
        this.setState({ showMobileError: true });
      }
    }

    if (e.target.name === "pass") {
      if (e.target.value !== "" && e.target.value.length >= 8) {
        this.setState({ showPassError: false });
      } else {
        this.setState({ showPassError: true });
      }
    }

    if (e.target.name === "confirmPass") {
      const { confirmPass } = this.state;
      if (e.target.value === confirmPass || e.target.value !== "") {
        this.setState({ showConfirmPassError: false });
      } else {
        this.setState({ showConfirmPassError: true });
      }
    }
  };

  onRegisteringData = (e) => {
    e.preventDefault();
    const { onClickRegsiterBtn } = this.props;
    const { name, email, pass, mobileNum, confirmPass } = this.state;
    // const newDataList = {
    //   id: v4(),
    //   name,
    //   email,
    //   mobileNum,
    //   pass,
    //   confirmPass,
    // };

    onClickRegsiterBtn(name, email, pass, mobileNum, confirmPass);

    this.setState({
      name: "",
      email: "",
      pass: "",
      mobileNum: "",
      confirmPass: "",
    });
  };

  onClickLogIn = () => {
    const { isLoginBtn } = this.props;
    isLoginBtn(true);
  };

  render() {
    const {
      name,
      email,
      pass,
      mobileNum,
      confirmPass,
      showNameError,
      showEmailError,
      showMobileError,
      showPassError,
      showConfirmPassError,
    } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="login-card">
          <p>Already Registered? then click LogIn</p>
          <button type="button" onClick={this.onClickLogIn}>
            LogIn
          </button>
        </div>

        <form onSubmit={this.onRegisteringData}>
          {/* NAMe */}
          <h1 style={{ margin: "20px" }}>REGISTER FORM</h1>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              onChange={this.onChanges}
              onBlur={this.onBlurs}
              id="fullName"
              type="text"
              placeholder="Enter Your Full Name"
              name="fullName"
              value={name}
              required
              title="enter your name"
            />
            {showNameError && <p style={{ color: "red" }}> *Required Name</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={this.onChanges}
              onBlur={this.onBlurs}
              name="email"
              value={email}
              required
              title="enter your email"
            />
            {showEmailError && (
              <p style={{ color: "red" }}>
                *Required Email that ends with .com
              </p>
            )}
          </div>

          {/* Mobile No */}
          <div>
            <label htmlFor="tel">Mobile No</label>
            <input
              onBlur={this.onBlurs}
              id="tel"
              type="tel"
              placeholder="Enter Your Mobile No"
              onChange={this.onChanges}
              name="tel"
              value={mobileNum}
              pattern="[7-9]{1}[0-9]{9}"
              required
              title="please phone number"
            />
            {showMobileError && (
              <p style={{ color: "red" }}>
                *Required mobile number of 10 digits
              </p>
            )}
          </div>

          {/* Pass */}
          <div>
            <label htmlFor="pass">Password</label>

            <input
              type="password"
              id="pass"
              name="pass"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              placeholder="Enter Your Password"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              value={pass}
              onChange={this.onChanges}
              onBlur={this.onBlurs}
            />
            {showPassError && (
              <p style={{ color: "red" }}>
                *Required Password which contains alpha numericals and with min
                8 count
              </p>
            )}
          </div>

          {/* Confirm Pass */}
          <div>
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              id="confirmPass"
              type="password"
              name="confirmPass"
              value={confirmPass}
              onBlur={this.onBlurs}
              placeholder="Enter Password To Confirm Your Password"
              onChange={this.onChanges}
            />
            {showConfirmPassError && (
              <p style={{ color: "red" }}>*Required Exact Same Password</p>
            )}
          </div>
          <input className="submit-btn" type="submit" placeholder="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
