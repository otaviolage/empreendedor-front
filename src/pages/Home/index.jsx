import { useEffect } from "react";
import Product from "../../components/Product";
import { useCart } from "../../hooks/Cart";
import Header from "../../components/Header";
import data from "../../data/data.json";
import "./style.css";

// function trazerData () {
//   var axios = require('axios');
  
//   var config = {
//     method: 'get',
//     url: 'https://api.themoviedb.org/3/movie/popular?api_key=5c0c8e6bcbe4541e91a94ec4995cc3eb&language=en-US&page=1',
//     headers: { }
//   };
  
//   axios(config)
//   .then(function (response) {
//     return JSON.stringify(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }



const Home = () => {
  const { cart } = useCart();
  // data = trazerData()

  useEffect(() => {
    data.products.forEach((produtos, i) => {});
  }, [cart]);
  return (
    <div className="home">
      <Header page="home" />
      <div className="body-home">
        {data.products.map((produto, i) => {
          return <Product prod={produto} />;
        })}
      </div>
    </div>
  );
};

export default Home;
