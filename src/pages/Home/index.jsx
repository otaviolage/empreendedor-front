import Product from "../../components/Product";
import Header from "../../components/Header";
import "./style.css";
import React, { Component } from "react";

const trazerData = async () => {
  var axios = require("axios");
  var data = "";

  var config = {
    method: "get",
    url: "http://localhost:3001/curso",
    headers: {},
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(123456, data)
  return data;
};

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await trazerData();
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="home">
        <Header page="home" />
        <div className="body-home">

        <div className="background">
        <h1>test</h1>
        </div>
        </div>
      </div>
    );
        

  }
}

export default Home;
