import React from "react";
import "../../css/hompage-css/mainsection.css";
import swirl from "../../image/hompage-images/swirl.png";
import { Link } from "react-router-dom";

function Mainsection() {
  return (
    <section className="container-fluid" id="main-section">
      <div>
        <div className="container main-content" id="moto-container">
          <div className="moto">
            <h1>Orgainc</h1>
            <h1>Fresh Food</h1>
          </div>

          <div className="moto-description">
            <p>
              Discover organic, sustainable food from our organic farm and{" "}
              <br /> fresh vegetable, and food Shop Now
            </p>
            <div className="d-flex">
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
              <img src={swirl} alt="bounce" className="bounce-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mainsection;
