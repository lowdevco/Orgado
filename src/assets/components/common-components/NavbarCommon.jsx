import React from "react";
import navbarlogo from "../../image/common-images/logo.webp";
import "../../css/common-css/navbar-common.css";
import { Link } from "react-router-dom";

function NavbarCommon() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" id="navbar-id">
          <div className="container-fluid d-flex justify-content-between py-3 align-items-center navbar-container">
            {/*  */}
            <div>
              <a href="" className="navbar-brand">
                <img src={navbarlogo} alt="logo" />
              </a>
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

              <div className="d-flex">
                <h6>
                  <Link to="/shop" className="nav-link-custom">
                    Shop
                  </Link>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </h6>
              </div>

              <div className="d-flex">
                <h6>
                  <Link to="/page" className="nav-link-custom">
                    Pages
                  </Link>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </h6>
              </div>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                <span className="navbar-badge">0</span>
              </div>

              <div className="navbar-icon d-none d-md-flex" id="nav-badge">
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
                <span className="navbar-badge">0</span>
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
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Link>
              </div>

              {/* Hamburger ALWAYS visible + triggers sidebar */}
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
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            Menu
          </h5>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="list-unstyled d-flex flex-column gap-3 mobile-menu-links">
            <li>
              <a href="#" className="mobile-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mobile-link">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="mobile-link">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="mobile-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mobile-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="mobile-link">
                Track Order
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <div className="navbar-icon d-flex m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </div>

          <div className="navbar-icon d-flex m-2">
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
          </div>

          <div className="navbar-icon d-flex m-2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarCommon;
