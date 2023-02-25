import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { createTheme, ThemeProvider } from "@mui/material";
import { amber } from "@mui/material/colors";
import { useStateValue } from "../../contexts/BasketContext";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="product">
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return (
                  <p key={i}>
                    {" "}
                    <StarRateIcon color="primary" />{" "}
                  </p>
                );
              })}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addProduct}>Add to Basket</button>
      </div>
    </ThemeProvider>
  );
};

export default Product;

const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
  },
});
