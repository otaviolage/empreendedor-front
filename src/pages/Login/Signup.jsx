import React, { Component } from 'react'
import LoginControl from "./LoginControl"
import "./NavbarStyle.css";
import Admin from "./../admin/index.jsx";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked: false,
      isSignUp: false,
      newUser: null
    }
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== ""){
        this.setState({
          isSignUp: true,
          newUser: {username: username, password: password1}
        });
      }else{
        alert("User name cannot be blank.")
      }
    }
    else{
      alert("The passwords you entered do not match.");
    }
  }
  
  render() {
    return (
      <div>
      {
        this.state.isSignUp ?
        <LoginControl newUser={this.state.newUser}/>
        :
        <div className="main_box--main--signUp">
          <label className="consult-label">
            <input type="checkbox"
              defaultChecked={this.state.isChecked}
              onChange={this.toggleChange}
            />
            Consultor?
          </label>
          
          <input type="text" id="signUpUsername" className="form-control" placeholder="username" autoComplete="false"></input>
          <input type="password" id="signUpPassword1" className="form-control" placeholder="password" ></input>
          <input type="password" id="signUpPassword2" className="form-control" placeholder="re-enter password" ></input>
          <br />
          <br />
          {this.state.isChecked ?
          <button className="btn btn-success">
            <Link to="./admin">
                Detalhes
            </Link>
          </button>
          :
          <button className="btn btn-success" onClick={this.NewUser}>Cadastrar</button>}
        </div>  
      }
      </div>
    )
  }
}

export default Signup;