import { useRef } from "react";
import "../../css/hompage-css/organic-tab.css";
import { Link } from "react-router-dom";
import productDatas from "../../../data/productDatas";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useCart } from "../../../context/CartContext";

const ProductActionButtons = () => (
  <>
    <button className="add-to-cart-btn" id="card-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart-plus"
        viewBox="0 0 16 16"
      >
        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg>
    </button>
    <button className="add-to-watch-btn" id="card-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-eye"
        viewBox="0 0 16 16"
      >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
      </svg>
    </button>
    <button className="add-to-like-btn" id="card-btn">
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
    </button>
  </>
);

function Organictab() {
  const { addToCart } = useCart();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  const sliderRef = useRef(null);

  return (
    <div>
      <div className="container my-5" id="organic-tabs">
        <div className="row my-3">
          <div className="col-3">
            <div className="row">
              <div className="col-8 d-flex gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.815"
                  height="31.383"
                  viewBox="0 0 17.815 31.383"
                >
                  <g
                    id="flash_1_"
                    data-name="flash (1)"
                    transform="translate(-110.682 1)"
                  >
                    <path
                      id="Path_3797"
                      data-name="Path 3797"
                      d="M136.38,17.994h-7.166l6.643-10.461h-8.369l-7.846,15.692h6.172L119.642,37.87Z"
                      transform="translate(-8.411 -8.01)"
                      fill="#ffdd09"
                    ></path>
                    <path
                      id="Path_3798"
                      data-name="Path 3798"
                      d="M129.58,7.533h-2.092l-7.846,15.692h2.092Z"
                      transform="translate(-8.411 -8.01)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_3799"
                      data-name="Path 3799"
                      d="M125.754,178.2,113.2,193.107l-2.092,4.969L127.847,178.2Z"
                      transform="translate(-0.401 -168.216)"
                      fill="#fd9808"
                    ></path>
                    <path
                      id="Path_3800"
                      data-name="Path 3800"
                      d="M111.231,30.383a.392.392,0,0,1-.262-.052.522.522,0,0,1-.209-.628l5.858-13.966h-5.387a.624.624,0,0,1-.471-.262.475.475,0,0,1,0-.523L118.606-.738A.549.549,0,0,1,119.077-1h8.369a.549.549,0,0,1,.471.262.475.475,0,0,1,0,.523L121.8,9.461h6.172a.5.5,0,0,1,.471.314.561.561,0,0,1-.052.575L111.649,30.226A.594.594,0,0,1,111.231,30.383Zm.837-15.692H117.4a.646.646,0,0,1,.418.209.508.508,0,0,1,.052.471l-4.812,11.507L126.87,10.507H120.8a.549.549,0,0,1-.471-.262.475.475,0,0,1,0-.523L126.5.046h-7.114Z"
                      transform="translate(0)"
                    ></path>
                  </g>
                </svg>
                <h3>Flash Sale!</h3>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-between gap-2 cerousel-btns">
                <button
                  className="cerousel-btn"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  &#10094;
                </button>
                <button
                  className="cerousel-btn"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
          <div className="col-3" id="missed">
            <h3>You May Missed</h3>
          </div>
          <div className="col-1"></div>
          <div className=" organic-nav-link col-5 d-flex justify-content-between align-items-center">
            <div id="remove">
              <Link>
                <h6>View All</h6>
              </Link>
            </div>
            <div>
              <Link>
                <h6>New Arrival</h6>
              </Link>
            </div>
            <div id="remove">
              <Link>
                <h6>Best Sale</h6>
              </Link>
            </div>
            <div>
              <Link>
                <h6>Trending</h6>
              </Link>
            </div>
            <div>
              <Link>
                <button>View All</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
              <div className="row  cerosal-box-section">
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
                  <div className="organic-cerosal">
                    <Slider ref={sliderRef} {...settings}>
                      {productDatas.slice(7, 10).map((product) => (
                        <div key={product.id}>
                          <div
                            className="organic-slide"
                            style={{
                              backgroundImage: `url(${product.img})`,
                            }}
                          >
                            <div className="organic-prod">
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
                  <div className="organic-box">
                    <div>
                      <p>Freshly</p>
                      <h3>Maitta Potato</h3>
                      <span>From</span> <h3>$9.00</h3>
                    </div>
                    <br />
                    <div className="d-flex align-items-end ">
                      <div className="organic-crl">
                        <h5 style={{ color: "white", fontWeight: "bold" }}>
                          Hot
                        </h5>
                        <h5 style={{ color: "white" }}>item</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="product-list">
                <div className="row">
                  {productDatas.slice(0, 4).map((product) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                      key={product.id}
                    >
                      <div className="product-card">
                        <div
                          className="product-card-top"
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div
                            className=" hover-element gap-3 pb-4"
                            style={{ height: "100%" }}
                          >
                            <ProductActionButtons />
                          </div>
                        </div>

                        <div className="product-card-bottom text-center">
                          <h4 className="prod-name">
                            <Link to={`/product/${product.id}`}>
                              {product.name}
                            </Link>
                          </h4>
                          <h4 className="prod-price">${product.price}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <div className="row">
                  {productDatas.slice(5, 9).map((product) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                      key={product.id}
                    >
                      <div className="product-card">
                        <div
                          className="product-card-top"
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div
                            className=" hover-element gap-3 pb-4"
                            style={{ height: "100%" }}
                          >
                            <button
                              className="add-to-cart-btn"
                              id="card-btn"
                              onClick={() => addToCart(product)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-cart-plus"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                              </svg>
                            </button>
                            <button className="add-to-watch-btn" id="card-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                              </svg>
                            </button>
                            <button className="add-to-like-btn" id="card-btn">
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
                            </button>
                          </div>
                        </div>

                        <div className="product-card-bottom text-center">
                          <h4 className="prod-name">
                            <a href="">{product.name}</a>
                          </h4>
                          <h4 className="prod-price">${product.price}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organictab;
