import React, { useState } from "react";
import "../../css/common-css/search.css";
import { Link } from "react-router-dom";

function SearchBox() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="searchbox-div">
      <div className="container">
        <div className="row gap-2  searchbox-container">
          <div className="col-3">
            <div className="select">
              <div className="category-dropdown">
                <button
                  className="category-btn"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <div className="d-flex">
                    <div className="searchbox-hamburg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                      </svg>
                    </div>
                    <h6>ALL CATEGORIES</h6>
                  </div>
                  <div className="searchbox-chevron">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </button>

                {showMenu && (
                  <div className="category-menu">
                    <Link to="/grocery">Grocery & Staples</Link>
                    <Link to="/organic">Organic Food</Link>
                    <Link to="/biscuits"> Biscuits & Snacks</Link>
                    <Link to="/fruits">Fresh Fruits</Link>
                    <Link to="/vegetables">Fruit & Vegetables</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-5">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="d-flex gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-headset"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                </svg>
              </div>
              <div className="search-text">
                <h6>8:30 AM - 9:30 PM</h6>
                <h4>695 023 52 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
