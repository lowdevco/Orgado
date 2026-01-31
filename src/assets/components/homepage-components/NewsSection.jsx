import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/hompage-css/news.css";

// images

import brand1 from "../../image/hompage-images/brand/brand-01.webp";
import brand2 from "../../image/hompage-images/brand/brand-02.webp";
import brand3 from "../../image/hompage-images/brand/brand-03.webp";
import brand4 from "../../image/hompage-images/brand/brand-04.webp";
import brand5 from "../../image/hompage-images/brand/brand-05.webp";
import brand6 from "../../image/hompage-images/brand/brand-06.webp";

function NewsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div>
      {/* Top section  */}

      <div className="container-fluid">
        <div id="brand-container">
          <div className="continer" id="brand">
            <Slider {...settings} className="continer">
              <div>
                <img src={brand1} alt="" />
              </div>
              <div>
                <img src={brand2} alt="" />
              </div>
              <div>
                <img src={brand3} alt="" />
              </div>
              <div>
                <img src={brand4} alt="" />
              </div>
              <div>
                <img src={brand5} alt="" />
              </div>
              <div>
                <img src={brand6} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* Bottom section  */}

      <div className="container-fluid my-3">
        <div className="container my-5 news-section">
          <div className="text-center">
            <h6>News Insight</h6>
            <h1>News From Orgado</h1>
          </div>
          <div className="row news-container gap-2">
            {/* Card 1  */}

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 news-card" id="news-card-1">
              <div className="news-img" id="news-img-1">
                <p style={{ color: "transparent" }}>1</p>
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

            {/* Card  2*/}

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  news-card" id="news-card-2">
              <div className="news-img" id="news-img-2">
                <p style={{ color: "transparent" }}>1</p>
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
                      <p>JOHN LUKE</p>
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
                      <p>5/7/25</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link>
                    <h4>Unique Ideas for Healthy Food You Havent heard yet</h4>
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

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12  news-card" id="news-card-3">
              <div className="news-img" id="news-img-3">
                <p style={{ color: "transparent" }}>1</p>
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
                      <p> JENIFER</p>
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
                      <p>8/11/24</p>
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
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
