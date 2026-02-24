import React from "react";
import navbarlogo from "../../image/common-images/logo.webp";
import "../../css/common-css/navbar-common.css";
import { Link } from "react-router-dom";
import logo from "../../image/common-images/logo.webp";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { useFavorite } from "../../../context/FavoriteContext";

function NavbarCommon() {
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isPagesHovered, setIsPagesHovered] = useState(false);
  const { totalItems } = useCart();
  const { totalFavorites } = useFavorite();

  return (
    <>
      <nav className="navbar navbar-wrap navbar-expand-lg">
        <div className="container-fluid" id="navbar-id">
          <div className="container-fluid d-flex justify-content-between py-3 align-items-center navbar-container">
            {/* */}
            <div>
              <Link to="/" className="navbar-brand">
                <img src={navbarlogo} alt="logo" />
              </Link>
            </div>

            {/* hidden nav */}
            <div className="d-none d-lg-flex justify-content-evenly gap-5 align-items-center navbar-">
              <div className="d-flex ">
                <h6>
                  <Link to="/" className="nav-link-custom">
                    Home
                  </Link>
                </h6>
              </div>

              {/* DropDown Start  */}
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
                    <Link to="/fav">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
              {/* DropDown End  */}

              {/* PAGE DROPDOWN START */}
              <div
                className="nav-item-dropdown"
                onMouseEnter={() => setIsPagesHovered(true)}
                onMouseLeave={() => setIsPagesHovered(false)}
              >
                <h6 className="d-flex align-items-center gap-1">
                  <Link
                    className={`nav-link-custom ${isPagesHovered ? "active-green" : ""}`}
                  >
                    Pages
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill={isPagesHovered ? "#699c47" : "currentColor"}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </h6>

                {/* Dropdown Menu */}
                <ul
                  className={`dropdown-popup ${isPagesHovered ? "show" : ""}`}
                >
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
              {/* PAGE DROPDOWN END */}

              <div>
                <h6>
                  <Link to="/blog" className="nav-link-custom">
                    Blog
                  </Link>
                </h6>
              </div>
              <div>
                <h6>
                  <Link to="/contact" className="nav-link-custom">
                    Contact
                  </Link>
                </h6>
              </div>
              <div>
                <h6>
                  <Link to="/track" className="nav-link-custom">
                    Track Order
                  </Link>
                </h6>
              </div>
            </div>

            <div className="d-flex justify-content-evenly gap-4 navbar-right-icons">
              {/* burton hide  */}
              <div className="navbar-icon d-none d-md-flex" id="nav-badge">
                <Link to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                    style={{ color: "black" }}
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </Link>
                <span className="navbar-badge">{totalItems}</span>
              </div>

              <div className="navbar-icon d-none d-md-flex" id="nav-badge">
                <Link to="/fav">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                    style={{ color: "black" }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </Link>
                <span className="navbar-badge">{totalFavorites}</span>
              </div>

              <div className="navbar-icon d-none d-md-flex" id="nav-badge">
                <Link to="/login" style={{ color: "black" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                    style={{ color: "black" }}
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Link>
              </div>

              <div className="navbar-icon" id="hamburger-icon">
                <div className="nav-hamburger d-flex ml-25">
                  <button
                    type="button"
                    className="hamburger-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                  >
                    <span className="hamburger-icon">
                      <span></span>
                      <span id="hamburger-icon-animation"></span>
                      <span></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* side barr */}

      <div
        className="offcanvas offcanvas-end p-5"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            <img src={logo} alt="logo" />
          </h5>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <hr />

        <div className="offcanvas-input d-flex justify-content-between">
          <input
            type="text"
            placeholder="What are you searching for?"
            className="w-100"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>

        <hr />

        <div className="offcanvas-contact mt-5">
          <div className="d-flex flex-column gap-3">
            <h3>CONTACT INFO</h3>
            <div className="d-flex gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div>
                <p>KERALA - 673592</p>
              </div>
            </div>

            <div className="d-flex gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </div>
              <div>
                <p>+(91) 1600 31 3424</p>
              </div>
            </div>

            <div className="d-flex gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <p>support@orgado.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas-body mt-5">
          <ul className="list-unstyled d-flex flex-column gap-3 mobile-menu-links">
            <li>
              <Link to="/" className="mobile-link">
                Home
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/shop" className="mobile-link">
                Shop
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/about" className="mobile-link">
                About
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/blog" className="mobile-link">
                Blog
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/contact" className="mobile-link">
                Contact
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/track" className="mobile-link">
                Track Order
              </Link>
            </li>
            <hr />
          </ul>
        </div>
        <div className="d-flex p-5" id="sidebar-icon">
          <div className="navbar-icon d-flex m-2" id="nav-badge">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
                style={{ color: "black" }}
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </Link>
            <span className="navbar-badge">{totalItems}</span>
          </div>

          <div className="navbar-icon d-flex m-2" id="nav-badge">
            <Link to="/favorite" style={{ color: "black" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </Link>
            <span className="navbar-badge">{totalFavorites}</span>
          </div>

          <div className="navbar-icon d-flex m-2">
            <Link to="/login" style={{ color: "black" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarCommon;
