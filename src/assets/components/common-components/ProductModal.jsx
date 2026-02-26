import React, { useEffect } from "react";
import "../../css/common-css/prodmodal.css";
import { useFavorite } from "../../../context/FavoriteContext.jsx";
import { useCart } from "../../../context/CartContext";

const ProductModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "pmodal-overlay") {
      onClose();
    }
  };

  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites?.some((fav) => fav.id === product.id);

  return (
    <div className="pmodal-overlay" onClick={handleOverlayClick}>
      <div className="pmodal-content">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="pmodal-body">
          <div className="pmodal-image-container">
            <img src={product.img || product.image} alt={product.name} />
          </div>

          <div className="pmodal-info-container">
            <h2 className="pmodal-product-name">{product.name}</h2>

            <div className="pmodal-pricing">
              <span className="pmodal-price">${product.price}</span>
              {product.oldPrice && (
                <del className="pmodal-old-price">${product.oldPrice}</del>
              )}
            </div>

            <p className="pmodal-description">
              {product.description ||
                "Fresh, organic, and locally sourced. Perfect for your daily needs."}
            </p>

            <div className="pmodal-wishlist-row">
              <button
                className={`add-to-wish-btn ${isFavorite ? "active" : ""}`}
                onClick={() => toggleFavorite(product)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isFavorite ? "red" : "currentColor"}
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <span>{isFavorite ? "In Wishlist" : "Add to Wishlist"}</span>
              </button>
            </div>

            <div className="pmodal-actions">
              <button
                className="pmodal-add-btn"
                onClick={() => addToCart(product)}
                title="Add to Cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
