import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id={1}
              title="industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
              price={29.99}
              image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-main-image-1.2.png"
              rating={5}
            />
            <Product
              id={2}
              title="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
              price={29.99}
              image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563378212-amazon-echo-dot-3-1563376152.jpg?crop=1xw:1xh;center,top&resize=480:*"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={3}
              title="distracted by the readable content of a page when looking at its layout. The point of using Lorem"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lLrxPDZo3HiH9d8kXon1FSK0NjT9B7rXYA&usqp=CAU"
              rating={5}
            />
            <Product
              id={4}
              title="by the readable content of a page when looking at its layout. The point of using Lorem"
              price={29.99}
              image="data:image/jpeg;base64,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"
              rating={5}
            />
            <Product
              id={5}
              title="the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNiCStNOgruiuIHL2rVMTuSFO1oOUsjH3jA&usqp=CAU"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={6}
              title="when an unknown printer took a galley of type and scrambled it to make a type specimen when an unknown printer took a galley of type and scrambled it to make a type specimen when an unknown printer took a galley of type and scrambled it to make a type specimen when an unknown printer took a galley of type and scrambled it to make a type specimen  "
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_4o5k22vEkylhXbCI_WlNvOZoiMxYm-Ptg&usqp=CAU"
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
