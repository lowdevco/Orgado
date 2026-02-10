import React, { useState } from "react";
import navbarlogo from "../../image/common-images/logo.webp";
import "../../css/hompage-css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // State to manage Shop dropdown visibility
  const [isShopHovered, setIsShopHovered] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="container-fluid" id="navbar-id">
        <div className="container-fluid d-flex justify-content-between py-3 align-items-center navbar-container">
          {/* Logo Section */}
          <div>
            <Link to="/">
              <img src={navbarlogo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="d-flex justify-content-evenly gap-4 align-items-center"
            id="navbar-links"
          >
            <div className="nav-item">
              <h6>
                <Link to="/" className="nav-link-custom">
                  Home
                </Link>
              </h6>
            </div>

            {/* SHOP DROPDOWN START */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <h6 className="d-flex align-items-center gap-1">
                <Link
                  className={`nav-link-custom ${isShopHovered ? "active-green" : ""}`}
                >
                  Shop
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill={isShopHovered ? "#699c47" : "currentColor"}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </h6>

              {/* Dropdown Menu */}
              <ul className={`dropdown-popup ${isShopHovered ? "show" : ""}`}>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
            {/* SHOP DROPDOWN END */}

            <div className="nav-item">
              <h6>
                <Link to="/page" className="nav-link-custom">
                  Pages
                </Link>
              </h6>
            </div>
            <div className="nav-item">
              <h6>
                <Link to="/blog" className="nav-link-custom">
                  Blog
                </Link>
              </h6>
            </div>
            <div className="nav-item">
              <h6>
                <Link to="/contact" className="nav-link-custom">
                  Contact
                </Link>
              </h6>
            </div>
            <div className="nav-item">
              <h6>
                <Link to="/track" className="nav-link-custom">
                  Track Order
                </Link>
              </h6>
            </div>
          </div>

          {/* Search Bar */}
          <div id="search-bar">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="searchbar-input"
                placeholder="Search..."
              />
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>

          {/* Icons Section */}
          <div className="d-flex justify-content-evenly gap-4">
            <div className="navbar-icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              <span className="navbar-badge">0</span>
            </div>
            <div className="navbar-icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
              <span className="navbar-badge">0</span>
            </div>
            <div className="navbar-icon1" id="navbar-icon-login">
              <Link to="/login" style={{ color: "black" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </Link>
            </div>
            <div className="navbar-hamburg d-md-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
