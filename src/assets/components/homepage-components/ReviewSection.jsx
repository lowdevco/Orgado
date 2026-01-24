import React from "react";
import "../../css/hompage-css/review.css";
import productDatas from "../../../data/productDatas";
import image from "../../image/hompage-images/Product/Banner/trendingbnr-1.jpg";
import reviewDatas from "../../../data/reviewDatas";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 8000,
  };

  return (
    <div className="container my-5">
      <div className="row gap-4">
        <div className="col-3 review-tab" id="review-tab-1">
          <div className="review-cerosal text-center">
            <Slider {...settings}>
              {reviewDatas.map((review) => (
                <div key={review.id}>
                  <div className="d-flex  gap-2 justify-content-center align-items-center">
                    <div>
                      <img src={review.img} alt="" />
                    </div>
                    <div>
                      <h3>{review.name}</h3>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div id="review-area">
                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-4 review-tab" id="review-tab-2">
          <div>
            <h6>Orgainic</h6>
            <a href="">Meat & Milk</a>
            <p>Premium quality meat & milk</p>
            <button className="btn product-btn">
              <a href="" style={{ fontSize: 16 }}>
                Shop Now
              </a>
            </button>
          </div>
        </div>
        <div className="col-4 review-tab" id="review-tab-3">
          <div>
            <h6>Orgainic</h6>
            <a href="">Vegetable</a>
            <p>Premium quality vegetables</p>
            <button className=" btn product-btn">
              <a href="" style={{ fontSize: 16 }}>
                Shop Now
              </a>
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="row my-1 gap-3">
        <div className="col-3 review-tab-bottom" id="review-tab-bottom-1">
          <div className="text-center">
            <h5>Download the App</h5>
            <p>Make your life easier</p>

            <div className="download-tab" id="download-tab-1"></div>
            <br />
            <div className="download-tab" id="download-tab-2"></div>
          </div>
        </div>
        <div className="col-3 review-tab-bottom" id="review-tab-bottom-2">
          <div className="review-m">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Top Rated</h3>
              <h6> View All </h6>
            </div>
            <div className="p-2">
              <div className="review-m-content d-flex gap-3 mb-3">
                <div className="m-img" id="m-img-lt-1"></div>
                <div>
                  <h6>Honey Nectar</h6>
                  <h5>$100</h5>
                </div>
              </div>
              <div className="review-m-content d-flex gap-3 mb-3">
                <div className="m-img" id="m-img-lt-2"></div>
                <div>
                  <h6>Pressed Olive oil</h6>
                  <h5>$300</h5>
                </div>
              </div>
              <div className="review-m-content d-flex gap-3">
                <div className="m-img" id="m-img-lt-3"></div>
                <div>
                  <h6>Earth Root Chips</h6>
                  <h5>$400</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 review-tab-bottom" id="review-tab-bottom-3">
          <div className="review-m">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Popular</h3>
              <h6> View All </h6>
            </div>
            <div className="p-2">
              <div className="review-m-content d-flex gap-3 mb-3">
                <div className="m-img" id="m-img-rt-1"></div>
                <div>
                  <h6>Midnight Chocolate</h6>
                  <h5>$800</h5>
                </div>
              </div>
              <div className="review-m-content d-flex gap-3 mb-3">
                <div className="m-img" id="m-img-rt-2"></div>
                <div>
                  <h6>Velvet Roast</h6>
                  <h5>$200</h5>
                </div>
              </div>
              <div className="review-m-content d-flex gap-3">
                <div className="m-img" id="m-img-rt-3"></div>
                <div>
                  <h6>Dry Fruits</h6>
                  <h5>$1000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 review-tab-bottom" id="review-tab-bottom-4">
          <h6>Freshly</h6>
          <h4 style={{ fontWeight: "750" }}>Maitta Potato</h4>
          <div>
            <span>From</span>
            <span>
              <h3 style={{ color: "brown", fontWeight: "800" }}>$9.00</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
