import React from "react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "../../css/hompage-css/trending-product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Product images

import prod1 from "../../image/hompage-images/Product/trending-product/prod1.png";
import prod2 from "../../image/hompage-images/Product/trending-product/prod2.png";
import prod3 from "../../image/hompage-images/Product/trending-product/prod3.png";
import prod4 from "../../image/hompage-images/Product/trending-product/prod4.png";
import prod5 from "../../image/hompage-images/Product/trending-product/prod5.png";
import prod6 from "../../image/hompage-images/Product/trending-product/prod6.png";
import prod7 from "../../image/hompage-images/Product/trending-product/prod7.png";
import prod8 from "../../image/hompage-images/Product/trending-product/prod8.png";
import prod9 from "../../image/hompage-images/Product/trending-product/prod9.png";
import prod10 from "../../image/hompage-images/Product/trending-product/prod10.png";


const trendingData = [
  {
    id: 1,
    name: "Golden Nectar Honey",
    price: 100,
    img: prod1,
  },
  {
    id: 2,
    name: "Velvet Roast Organic Blend",
    price: 200,
    img: prod2,
  },
  {
    id: 3,
    name: "Cold-Pressed Olive Oil",
    price: 300,
    img: prod3,
  },
  {
    id: 4,
    name: "Earth-Crisp Sea Salt Root Chips",
    price: 400,
    img: prod4,
  },
  {
    id: 5,
    name: "Pearl Essence Organic Tapioca",
    price: 500,
    img: prod5,
  },
  {
    id: 6,
    name: "Global Signature Spice Blend",
    price: 600,
    img: prod6,
  },
  {
    id: 7,
    name: "Telli Organic Peppercorns",
    price: 700,
    img: prod7,
  },
  {
    id: 8,
    name: "Midnight Dark Chocolate",
    price: 800,
    img: prod8,
  },
  {
    id: 9,
    name: "Vital Plant-Based Protein",
    price: 900,
    img: prod9,
  },
  {
    id: 10,
    name: "Sun-Drenched Fruit Medley",
    price: 1000,
    img: prod10,
  },
];

function TrendingProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };

  const sliderRef = useRef(null);

  return (
    <div className="container my-5">
      <div className="trending-product row">
        <div className="col-3 trending-lt">
          <p>Organic</p>
          <h2>Fresh Masala</h2>
        </div>

        <div className="col-9 trending-rt">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <h1>You May Missed</h1>
            </div>
            <div>
              <h6>View All</h6>
            </div>
            <div>
              <h6>New Arrival</h6>
            </div>
            <div>
              <h6>Best Sale</h6>
            </div>
            <div>
              <h6>Trending</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <button
                className="cerousel-btn"
                onClick={() => sliderRef.current.slickPrev()}
              >
                &#10094;
              </button>
              <button
                className="cerousel-btn"
                onClick={() => sliderRef.current.slickNext()}
              >
                &#10095;
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {trendingData.map((product) => (
              <div key={product.id}>
                <div className="trending-card">
                  <div
                    className="trending-card-top"
                    style={{ backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >

                    <div className="d-flex align-items-end justify-content-center gap-3 pb-4" style={{ height: '100%' }}>
                        <button className="add-to-cart-btn" id="card-btn">+</button>
                        <button className="add-to-watch-btn" id="card-btn">E</button>
                        <button className="add-to-like-btn" id="card-btn">*</button>
                    </div>

                  </div>

                  <div className="trending-card-bottom text-center">
                    <h4 className="prod-name"><a href="">{product.name}</a></h4>
                    <h4 className="prod-price">${product.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
