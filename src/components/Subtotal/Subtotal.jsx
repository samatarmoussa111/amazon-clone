import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contexts/BasketContext";
import { useTotalPrice } from "../../hooks/useTotalPrice";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = useTotalPrice();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(totalPrice) => {
          return (
            <>
              <p>
                Subtotal ({basket?.length} items) :{" "}
                <strong>{totalPrice}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
