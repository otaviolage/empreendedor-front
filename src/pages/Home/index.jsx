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
    // const data = await trazerData();
    const data = dataTest;
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="home">
        <Header page="home" />
        <div className="body-home">
          {this.state.data.map((produto, i) => {
            return <Product prod={produto} />;
          })}
        </div>
      </div>
    );
  }
}

var dataTest = [
  {
      "sku": "d9059f0f492f4d71a2b4",
      "name": "CURSO FINANÇAS",
      "imageUrl": "https://codegate01.com/wp-content/uploads/2020/05/curso-html.jpg",
      "availability": {
          "price": 40
      },
      "vendor": {
          "id": 62,
          "name": "Udemy"
      }
  },
  {
      "sku": "dbd6272add8d42199134",
      "name": "CURSO CONTABILIDADE",
      "imageUrl": "https://oraculoti.com.br/wp-content/uploads/2018/06/Curso-JavaScript-Completo-com-6-Projetos-Reais.jpg",
      "availability": {
          "price": 40
      },
      "vendor": {
          "id": 62,
          "name": "Alura"
      }
  },
  {
      "sku": "8608e689982e49d58a8e",
      "name": "CURSO DE RH",
      "imageUrl": "https://jornadadodev.com.br/sites/default/files/cursos/curso-css3.jpg",
      "availability": {
          "price": 30
      },
      "vendor": {
          "id": 62,
          "name": "DevMedia"
      }
  },
  {
      "sku": "d9059f0f492f4d71a2b5",
      "name": "CURSO MKT",
      "imageUrl": "https://codegate01.com/wp-content/uploads/2020/05/curso-html.jpg",
      "availability": {
          "price": 45
      },
      "vendor": {
          "id": 62,
          "name": "DevMedia"
      }
  }]

export default Home;
