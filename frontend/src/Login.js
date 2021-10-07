import React, { Component } from "react";
import "./Register.css";

class Login extends Component {
  state = {
    loginEmail: "",
    loginPass: "",
    loginName: "",
    showEmailError: false,
    showPassError: false,
    showUsernameError: false,
  };

  onChanges = (e) => {
    if (e.target.name === "loginEmail") {
      this.setState({ loginEmail: e.target.value });
    }
    if (e.target.name === "loginPass") {
      this.setState({ loginPass: e.target.value });
    }

    if (e.target.name === "loginName") {
      this.setState({ loginName: e.target.value });
    }
  };

  onBlurs = (e) => {
    if (e.target.name === "loginEmail") {
      if (e.target.value === "") {
        this.setState({ showEmailError: true });
      } else {
        this.setState({ showEmailError: false });
      }
    }

    if (e.target.name === "loginPass") {
      if (e.target.value === "") {
        this.setState({ showPassError: true });
      } else {
        this.setState({ showPassError: false });
      }
    }

    if (e.target.name === "loginName") {
      if (e.target.value === "") {
        this.setState({ showUsernameError: true });
      } else {
        this.setState({ showUsernameError: false });
      }
    }
  };

  onLoginBtnClicked = (e) => {
    e.preventDefault();
    const { onClickLoginBtn } = this.props;
    const { loginPass, loginName } = this.state;
    onClickLoginBtn(loginName, loginPass);
  };

  onClickRegisterBtnClicked = () => {
    const { isRegisterBtn } = this.props;
    isRegisterBtn(true);
  };

  render() {
    const { loginName, loginPass, showPassError } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.onLoginBtnClicked}>
          <div>
            <label htmlFor="loginName">Username</label>
            <input
              type="text"
              name="loginName"
              id="loginName"
              placeholder="Enter Your Username"
              required
              onChange={this.onChanges}
              onBlur={this.onBlurs}
              value={loginName}
              title="enter your Username"
            />
          </div>
          {/* <div>
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              id="loginEmail"
              placeholder="Enter Your Email"
              onChange={this.onChanges}
              onBlur={this.onBlurs}
              name="loginEmail"
              value={loginEmail}
              title="enter your email"
              required
            />
            {showEmailError && (
              <p style={{ color: "red" }}>*Required Email to Login</p>
            )}
          </div> */}

          <div>
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              name="loginPass"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              placeholder="Enter Your Password"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              value={loginPass}
              onChange={this.onChanges}
              onBlur={this.onBlurs}
            />

            {showPassError && (
              <p style={{ color: "red" }}>*Required Password to Login</p>
            )}
          </div>
          <button type="submit">LogIn</button>
        </form>
        <div className="register-card">
          <p className="desc">New User?Then Register here</p>
          <button
            type="button"
            className="register-btn"
            onClick={this.onClickRegisterBtnClicked}
          >
            REGISTER
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
