import "./style.css";
import { useCart } from "../../hooks/Cart";
import { useEffect, useState, useMemo } from "react";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";

const Product = ({ prod }) => {
  const { addToCart, cart, deleteToCart } = useCart();
  // const parcela = prod.availability.price / 8;

  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const isInCartFilter = cart.filter((cartItem) => {
      return cartItem.sku === prod.sku;
    });
    setIsInCart(!!isInCartFilter.length);
  }, [cart, prod]);

  const parsedTotal = useMemo(() => {
    return formatPrice(prod.availability.price);
  }, [prod.availability.price]);

  return (
    <div className="product">
      <div className="name-product">
        <p>{prod.name}</p>
      </div>
      <div className="box-product">
        <div className="img-product">
          <img src={prod.imageUrl} alt="like" />
        </div>
        <div className="preco-product">
          <h4>{prod.vendor.name}</h4>
        </div>
        <div className="comprar">
          {isInCart ? (
            <button
              onClick={() => {
                deleteToCart(prod.sku);
              }}
              className="remover"
            >
              Remover da Sacola
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart(prod);
              }}
              className="adicionar"
            >
              <Link to="./cart" className="sacola">
                Quero saber mais!
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
