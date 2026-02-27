import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/shop-css/shop.css";
import productDatas from "../../../data/productDatas";
import { useCart } from "../../../context/CartContext";
import { useFavorite } from "../../../context/FavoriteContext";
import ProductModal from "../common-components/ProductModal.jsx";

function ShopSection() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorite();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          dots: false,
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          dots: false,
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          dots: false,
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5 shop-container">
      <div className="d-flex flex-wrap justify-content-between align-items-end mb-4">
        <div>
          <h2 className="shop-title mb-1">Shop Our Products</h2>
          <p className="text-muted mb-0">Fresh, organic, and locally sourced</p>
        </div>

        <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
          <button
            className="shop-carousel-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &#10094;
          </button>
          <button
            className="shop-carousel-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="shop-slider-wrapper">
        <Slider ref={sliderRef} {...settings} className="shop-slider">
          {productDatas.map((product) => {
            const isFavorite = favorites?.some((fav) => fav.id === product.id);

            return (
              <div key={product.id}>
                <div className="shop-card">
                  <div
                    className="shop-card-top"
                    style={{
                      backgroundImage: `url(${product.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="shop-hover-element gap-3 pb-4"
                      style={{ height: "100%" }}
                    >
                      <button
                        className="add-to-cart-btn shop-card-btn"
                        onClick={() => addToCart(product)}
                        title="Add to Cart"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                      </button>
                      <button
                        className="add-to-watch-btn shop-card-btn"
                        title="Quick View"
                        onClick={() => openModal(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      </button>

                      <button
                        className="add-to-like-btn shop-card-btn"
                        title="Add to Wishlist"
                        onClick={() => toggleFavorite(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill={isFavorite ? "red" : "currentColor"}
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          {isFavorite ? (
                            <path
                              fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                          ) : (
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="shop-card-bottom text-center">
                    <h4 className="shop-prod-name">
                      <span style={{ cursor: "pointer" }}>{product.name}</span>
                    </h4>
                    <h4 className="shop-prod-price">₹{product.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default ShopSection;
