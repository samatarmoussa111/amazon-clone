import React from "react";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQEy4Rt240oUWfYrFUNSlPN1bIuM45kNmsVgyKzdI3lpq-u-TcEP01n4TD9gcLLeNaQ&usqp=CAU"
          alt="amazon ads"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/** Basket item */}
          {/** Basket item */}
          {/** Basket item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
