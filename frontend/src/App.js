import { Component } from "react";
import Axios from "axios";
import Register from "./Register";
import Login from "./Login";

class App extends Component {
  state = { logIn: true, signIn: false };

  register = (name, email, pass, mobileNum, confirmPass) => {
    Axios({
      method: "POST",
      data: {
        username: name,
        password: pass,
        confirm_password: confirmPass,
        mobile_num: mobileNum,
        email: email,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  login = (loginName, loginPass) => {
    Axios({
      method: "POST",
      data: {
        username: loginName,
        password: loginPass,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  // getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  onClickRegisterBtn = () => {
    this.setState({ logIn: false, signIn: true });
  };

  onClickLoginBtn = () => {
    this.setState({ logIn: true, signIn: false });
  };

  render() {
    const { logIn, signIn } = this.state;

    return (
      <div>
        {signIn && (
          <Register
            isLoginBtn={this.onClickLoginBtn}
            onClickRegsiterBtn={this.register}
          />
        )}

        {logIn && (
          <Login
            isRegisterBtn={this.onClickRegisterBtn}
            onClickLoginBtn={this.login}
          />
        )}
      </div>
    );
  }
}

export default App;
