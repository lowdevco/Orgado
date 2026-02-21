import React from "react";
import "../../css/cart-css/favorite.css";
import { useFavorite } from "../../../context/FavoriteContext";
import { useCart } from "../../../context/CartContext";

function FavoriteSection() {
  const { favorites, removeFromFavorite } = useFavorite();
  const { addToCart } = useCart();

  // --- EMPTY STATE ---
  if (favorites.length === 0) {
    return (
      <div
        className="container my-5 d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "68vh" }}
      >
        <h2 className="text-muted mb-4">Your Wishlist is Empty</h2>
        <a href="/shop" className="btn px-4 py-2 text-white fav-shop-btn">
          Go Back to Shop
        </a>
      </div>
    );
  }

  // --- POPULATED STATE ---
  return (
    <div className="container my-4 my-md-5 favorite-container">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <h3 className="mb-0">Your Favorites</h3>
        <span className="text-muted">{favorites.length} Item(s)</span>
      </div>

      <div className="row">
        {favorites.map((item) => (
          <div className="col-lg-6 mb-4" key={item.id}>
            <div className="card border shadow-sm h-100 fav-card">
              <div className="card-body p-3 p-md-4">
                <div className="d-flex gap-3 h-100">
                  {/* Image Section */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded border"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Details Section */}
                  <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    {/* Top Row: Title & Remove Button */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5
                        className="mb-0 text-break pe-2"
                        style={{ fontSize: "1.1rem" }}
                      >
                        {item.name}
                      </h5>
                      <button
                        className="btn btn-outline-danger btn-sm flex-shrink-0 px-2 py-1 fav-remove-btn"
                        onClick={() => removeFromFavorite(item.id)}
                        title="Remove from favorites"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </div>

                    {/* Bottom Row: Price & Add to Cart */}
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-auto">
                      <span className="fw-bold fs-5 fav-price">
                        ${item.price}
                      </span>
                      <button
                        className="btn btn-sm text-white px-3 py-2 fw-medium shadow-sm fav-add-btn"
                        onClick={() => addToCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-plus me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteSection;
