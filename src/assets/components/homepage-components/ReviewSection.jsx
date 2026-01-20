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
    arrows:false,
    autoplaySpeed: 8000,
  };

  return (
    <div className="container my-5">
      <div className="row gap-4">
        <div className="col-3 review-tab" id="review-tab-1">
          <div className="review-cerosal text-center">
            <Slider  {...settings}>
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
                <p>
                  {review.review}
                </p>
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

      <div>
        
      </div>

    </div>
  );
}

export default ReviewSection;
