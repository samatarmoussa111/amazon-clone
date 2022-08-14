import React from "react";
import "./Product.css";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

const Product = ({ id, title, image, price, rating }) => {
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
                  <p>
                    {" "}
                    <StarRateRoundedIcon color="primary" />{" "}
                  </p>
                );
              })}
          </div>
        </div>
        <img src={image} alt="" />
        <button>Add to Basket</button>
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
