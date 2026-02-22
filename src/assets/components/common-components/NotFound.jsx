import React from 'react'
import "../../css/common-css/not-found.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <>
        <div className="container">
          <div
            className="not-found text-center py-5"
            style={{
              maxHeight: "80vh",
              height: "79vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h1>404</h1>
            </Link>
            <div className='msg-404'>
              <h2>Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default NotFound
