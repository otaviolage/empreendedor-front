import ItemCart from "../../components/ItemCart";
import "./style.css";
import Header from "../../components/Header";
import TotalCart from "../../components/TotalCart";
import { useCart } from "../../hooks/Cart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <Header page="cart" />
      <div className="body-cart">
        {cart.length && (
          <div className="box-itemcart">
            <img className="img-item" src={cart[0].imageUrl} alt="airfryer" />
            <h1>{cart[0].name}</h1>
            <h3>Consultor especializado em {cart[0].vendor.name}</h3>
          </div>
        )}
        <br />
        <div className="item-cart">
          {cart.length ? (
            cart.map((cartItem) => {
              return <ItemCart item={cartItem} key={cartItem.sku} />;
            })
          ) : (
            <div>Sacola Vazia</div>
          )}
        </div>
        <TotalCart />
      </div>
    </div>
  );
};

export default Cart;
