import "./admin.css";
import Header from "../../components/Header";
import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
var axios = require("axios");

class Admin extends React.Component {
  state = {
    sku: "",
    name: "",
    imageUrl: "",
    price: 0,
    vendor: "",
    returnToHome: false,
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      sku: this.state.sku,
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      price: this.state.price * 1.1,
      vendor: this.state.vendor,
    };

    await axios.post(`http://localhost:3001/curso`, { data }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({
      returnToHome: true
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.returnToHome ? (
          <Redirect to="/" />
        ) : (
          <Fragment>
            <Header page="admin" />
            <div className="Admin">
              <div className="container">
                <div className="form">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>
                        Código:
                        <input
                          type="text"
                          name="sku"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Nome:
                        <input
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Imagem (url):
                        <input
                          type="text"
                          name="imageUrl"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Preço:
                        <input
                          type="number"
                          name="price"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Especialidade:
                        <input
                          type="text"
                          name="vendor"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <br />
                    <button type="submit">Concluir o Cadastro</button>
                  </form>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Admin;
