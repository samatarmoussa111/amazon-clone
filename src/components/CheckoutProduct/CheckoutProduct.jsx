import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./CheckoutProduct.css";
import { useStateValue } from "../../contexts/BasketContext";

const CheckoutProduct = ({ item }) => {
  const [{ basket }, dispath] = useStateValue();

  const deleteProduct = () => {
    dispath({
      type: "DELETE_FROM_BASKET",
      id: item.id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={item.image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{item.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={deleteProduct}>Delete from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
