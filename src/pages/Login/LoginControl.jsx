import React from "react";
import Signup from "./Signup";
import Home from "./../Home/index.jsx";
import Admin from "./../admin/index.jsx";
import "./NavbarStyle.css";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "admin", password: "admin" },
        { username: "otavio", password: "123" },
        { username: "matheus", password: "123" },
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false,
      isAdmin: false,
    };
    this.new = this.props;
  }

  Control = () => {
    var newState = this.state.users.concat(this.new.newUser);
    console.log("newState", newState);
    if (this.new.newUser !== undefined) {
      this.setState({
        users: newState,
      });
    }

    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value === "admin" && password.value === "admin") {
      return this.setState({
        isAdmin: true,
      });
    }

    this.state.users.map((user) => {
      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        return this.setState({
          welcomeConnect: true,
          trueUsername: user.username,
        });
      }
    });
  };

  SignUp = () => {
    this.setState({ isSign: true });
  };

  render() {
    return (
      <div>
        {this.state.isAdmin ? (
          <Admin />
        ) : this.state.welcomeConnect ? (
          <Home />
        ) : this.state.isSign ? (
          <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
        ) : (
          <div className="main_box--main--login">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="username"
              autoComplete="false"
            />
            <input
              type="password"
              id="password"
              className="
              form-control"
              placeholder="password"
            />
            <button className="btn btn-success" onClick={this.Control}>
              LOGIN
            </button>
            <p
              onClick={this.SignUp}
              style={{
                textAlign: "center",
                color: "#262626",
                marginTop: "-5px",
                cursor: "pointer",
              }}
            >
              Novo Usuário
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
