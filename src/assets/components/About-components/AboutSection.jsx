import React from "react";
import "../../css/about-css/about.css";
import { Link } from "react-router-dom";
import swirl from "../../image/hompage-images/swirl.png";

function AboutSection() {
  return (
    <section className="container my-5 py-5" id="about-section">
      <div className="row align-items-center mb-5">
        {/* Left Column: Visual/Heading */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="about-image-container p-5 text-center position-relative">
            <h6 className="text-success text-uppercase fw-bold ls-2">
              Since 2023
            </h6>
            <h1 className="display-4 fw-bold mt-3">
              Purely Organic, <br /> Truly Fresh
            </h1>
            <p className="mt-4 text-muted">
              Sourced from the heart of Wayanad, Kerala, bringing nature’s
              finest directly to your kitchen table.
            </p>
            <img
              src={swirl}
              alt="swirl decoration"
              className="bounce-img mt-4"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="col-lg-6">
          <div className="about-content ps-lg-5">
            <h2 className="fw-bold mb-4">
              Cultivating a Healthier Future with Orgado
            </h2>
            <p className="lead text-muted mb-4">
              At <strong>ORGADO</strong>, we believe that food should be as
              nature intended. Our journey started in{" "}
              <strong>Bathery, Wayanad</strong>, with a simple mission: to
              bridge the gap between sustainable organic farms and
              health-conscious families.
            </p>

            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="about-feature-card p-3 border-start border-4 border-success shadow-sm">
                  <h6 className="fw-bold text-dark">100% Sustainable</h6>
                  <p className="small text-muted mb-0">
                    Discover eco-friendly farming practices that protect our
                    Keralan soil.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-feature-card p-3 border-start border-4 border-success shadow-sm">
                  <h6 className="fw-bold text-dark">Premium Quality</h6>
                  <p className="small text-muted mb-0">
                    Rigorous quality checks for every vegetable, fruit, and
                    dairy product.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4 flex-wrap">
              <Link to="/shop">
                <button className="btn product-btn px-5 py-3 fw-bold">
                  Shop Organic Now
                </button>
              </Link>
              <div className="about-contact-box">
                <span className="d-block small text-uppercase text-muted">
                  Support Contact
                </span>
                <span className="fw-bold text-dark">+(91) 1600 31 3424</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="row text-center mt-5 py-4 bg-light rounded-4 g-4">
        <div className="col-md-3">
          <h3 className="fw-bold text-success">50+</h3>
          <p className="text-muted mb-0">Organic Products</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold text-success">100%</h3>
          <p className="text-muted mb-0">Natural Produce</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold text-success">24/7</h3>
          <p className="text-muted mb-0">Expert Support</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold text-success">Fresh</h3>
          <p className="text-muted mb-0">Farm to Home</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
