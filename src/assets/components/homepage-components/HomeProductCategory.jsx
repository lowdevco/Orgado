import React from "react";
import "../../css/hompage-css/HomeProductCategory.css";
import { Link } from "react-router-dom";

function HomeProductCategory() {
  return (
    <div className="container  my-5">
      <div className=" home-product-category">
        <div className="  product-tab1 ">
          <div>
            <h6>Orgainic</h6>
            <a href="">Meat & Milk</a>
            <p>Premium quality meat & milk</p>
            <button className="btn product-btn">
              <Link to="/shop" style={{ fontSize: 16 }}>
                Shop Now
              </Link>
            </button>
          </div>
        </div>

        <div className=" product-tab2 ">
          <div>
            <h6>Orgainic</h6>
            <a href="">Vegetable</a>
            <p>Premium quality vegetables</p>
            <button className=" btn product-btn">
              <Link to="/shop" style={{ fontSize: 16 }}>
                Shop Now
              </Link>
            </button>
          </div>
        </div>

        <div className=" product-tab3 ">
          <div>
            <h6>Orgainic</h6>
            <a href="">Food and Fuits</a>
            <p>Premium quality Fresh produce</p>
            <button className="btn product-btn">
              <Link to="/shop" style={{ fontSize: 16 }}>
                Shop Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCategory;
