import React from "react";
import "../../css/blog-css/blog.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blog-section">
      <div className="container my-5 blog-container">
        <div className="row gap-2 my-3">
          {/* Card 1  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-1">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>
                    Things I Wish I Had Known About Angular When I Started New
                  </h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-2">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Unique Ideas for Healthy Food You Haven’t heard yet</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-3">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Five Data-Loading Patterns To Boost Web Performance</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row gp-2 my-3">
          {/* Card 4  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-4">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>
                    Unconscious Biases That Get In The Way Of Inclusive Design
                  </h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-5">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Building A Retro Draggable Web Component With Lit</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-6">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Effective Communication For Everyday Meetings</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row gp-2 my-3">
          {/* Card 7  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-7">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Worthy Cyber Monday Organic Food From Foodpond</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 8  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-8">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>Holiday Home Delivery We have Recently Ordered</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 9  */}

          <div className="col-4 blog-card" id="blog-card-1">
            <div className="blog-img" id="blog-img-9">
              <p style={{ color: "transparent" }}>0</p>
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex gap-2">
                  <div>
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
                  <div>
                    <p>ORGADO ADMIN</p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div>
                    <p>9/12/25</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <h4>The Realities And Myths Of Contrast And Color</h4>
                </Link>
              </div>

              <div>
                <Link>
                  <h6>Read More</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
