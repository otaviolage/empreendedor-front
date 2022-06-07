import "./style.css";
import { useCart } from "../../hooks/Cart";
import { useCallback, useMemo } from "react";
import formatPrice from "../../utils/formatPrice";

const ItemCart = ({ item }) => {
  const { updateCart, deleteToCart } = useCart();

  const parsedTotal = useMemo(() => {
    return formatPrice(item.availability.price);
  }, [item.availability.price]);

  const allQuantity = useCallback(() => {
    let options = [];
    for (var i = 1; i <= 10; i++) {
      options.push(
        <option
          value={i}
          defaultValue={i === item.quantity}
          key={`${item.sku}-${i}`}
        >
          {i}
        </option>
      );
    }
    return options;
  }, [item]);
  return (
    <div className="itemcart">
      <div className="box-itemcart">
        <div className="desc-item">
          <p className="vendedor">Consultoria de {item.vendor.name}</p>
        </div>
        <div className="precos">
          <p>Preço:</p>
          <div>
            <p>{parsedTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
