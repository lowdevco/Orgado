import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/hompage-css/news.css"

// images

import brand1 from "../../image/hompage-images/brand/brand-01.webp"
import brand2 from "../../image/hompage-images/brand/brand-02.webp"
import brand3 from "../../image/hompage-images/brand/brand-03.webp"
import brand4 from "../../image/hompage-images/brand/brand-04.webp"
import brand5 from "../../image/hompage-images/brand/brand-05.webp"
import brand6 from "../../image/hompage-images/brand/brand-06.webp"

function NewsSection() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  return (
    <div>
      {/* Top section  */}

      <div className='container-fluid'>
        <div id='brand-container'>
        <div className='continer' id='brand'>
            <Slider {...settings}  className='continer'>
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

      <div className='container-fluid my-3'>
        <div className='container my-5'>
            <div className='text-center'>
                <p>News Insight</p>
                <h1>News From Orgado</h1>
            </div>
            <div className='row'>
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default NewsSection
