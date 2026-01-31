import React from "react";
import "../../css/hompage-css/browsebycategory.css";
import { Link } from "react-router-dom";

function BrowseByCategory() {
  return (
    <div className="container my-5">
      <div className="category-tabs">
        <div className="row my-4  ">
          <div className="col-6">
            <h1>Browse By Category</h1>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <div>
              <button>View all Category</button>
            </div>
          </div>
        </div>
        <div className="row gap-4 category-tabs-container ">
          <div className="col-lg-3 col-md-6 mb-4 category-tab" id="category-tab-1">
            <div className="category-list">
              <h4>Fruits & Vegitable</h4>
              <ul>
                <li>
                  <Link>Cauliflower</Link>
                </li>
                <li>
                  <Link>Orange</Link>
                </li>
                <li>
                  <Link>Cucumber</Link>
                </li>
                <li>
                  <Link>Banana</Link>
                </li>
                <li>
                  <Link>Potato</Link>
                </li>
                <li>
                  <Link>Strawberry</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 category-tab" id="category-tab-2">
            <div className="category-list">
              <h4>Dairy Products</h4>
              <ul>
                <li>
                  <Link>Butter</Link>
                </li>
                <li>
                  <Link>Chocolate</Link>
                </li>
                <li>
                  <Link>Honey</Link>
                </li>
                <li>
                  <Link>Cheese</Link>
                </li>
                <li>
                  <Link>Ice Cream</Link>
                </li>
                <li>
                  <Link>Milk</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 category-tab" id="category-tab-3">
            <div className="category-list">
              <h4>Grocery & Staple</h4>
              <ul>
                <li>
                  <Link>Noodle</Link>
                </li>
                <li>
                  <Link>Oils</Link>
                </li>
                <li>
                  <Link>Onion</Link>
                </li>
                <li>
                  <Link>Red Gram</Link>
                </li>
                <li>
                  <Link>Rice</Link>
                </li>
                <li>
                  <Link>Flavor</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 category-tab" id="category-tab-4">
            <div className="category-list">
              <h4>Miscellaneous</h4>
              <ul>
                <li>
                  <Link>Nut & Seed</Link>
                </li>
                <li>
                  <Link>Oils</Link>
                </li>
                <li>
                  <Link>Fruits</Link>
                </li>
                <li>
                  <Link>Tomatoe</Link>
                </li>
                <li>
                  <Link>Soup</Link>
                </li>
                <li>
                  <Link>More Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseByCategory;
