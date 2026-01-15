import React from "react";
import "../../css/hompage-css/subbar.css";

function Subbar() {
  return (
    <header className="subbar">
      <div className="container-fluid" id="subbar">
        <div className="container-fluid d-flex justify-content-between py-2 gap-3 subbar-container">
          <div className="d-flex justify-content-evenly gap-3">
            <div>
              <a href="" id="sub-link">
                About Us
              </a>
            </div>
            <div>|</div>
            <div>
              <a href="" id="sub-link">
                My account
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-evenly gap-3">
            <div id="option">
              <select name="language" id="language">
                <option value="EN">English</option>
                <option value="HN">Hindi</option>
                <option value="AR">Arabic</option>
                <option value="BE">Bengali</option>
                <option value="FR">French</option>
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
              </select>
            </div>
            <div>|</div>
            <div id="option">
              <select name="currency" id="currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Subbar;
