import React, {useState, useRef} from 'react';
import Slider from "react-slick";

import './Portfolios.scss';
import "slick-carousel/slick/slick.css";
import porfolio_1 from "../../images/portfolio_1.jpg";
import porfolio_2 from "../../images/portfolio_2.jpg";
import porfolio_3 from "../../images/portfolio_3.jpg";

import right_arrow from "../../images/right-arrow.svg";
import left_arrow from "../../images/left-arrow.svg";


const PORTFOLIO_SLIDER = [
    {
        imgSrc: porfolio_1,
        title: null,
    },
    {
        imgSrc: porfolio_2,
        title: null,
    },
    {
        imgSrc: porfolio_3,
        title: null,
    },
    {
        imgSrc: porfolio_1,
        title: null,
    }
  ]

  const SETTINGS = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 781,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                autoplaySpeed: 2000,
                autoplay: true,
            }
        }
    ]
 
  };

const Portfolios = () => {

    const [isActiveBtn, setIsActiveBtn] = useState('next');

    const customSlider = useRef();

    const prev = () => {
        customSlider.current.slickPrev();
    }

    const next = () => {
        customSlider.current.slickNext();
    }

    const clickButton = (typeBtn) => {

        setIsActiveBtn(typeBtn);
        (typeBtn === "next") ? next() : prev();
    }

 

  return (
    <section className="portfolios" id="Portfolios">
        <div className="container">
        <h2 className="inner-subtitle-start">Featured Portfolios</h2>
        <div className="portfolios-slider">
            <button className={`slick-arrow slick-prev btn ${isActiveBtn === "prev" ? "active" : ""}`} onClick={()=>clickButton("prev")}>
                <img src={left_arrow} alt="" />
            </button>
            <button className={`slick-arrow slick-next btn ${isActiveBtn === "next" ? "active" : ""}`} onClick={()=>clickButton("next")}>
                <img src={right_arrow} alt="" />
            </button>
        <Slider {...SETTINGS} ref={customSlider}>
            {
                PORTFOLIO_SLIDER.map((slide, index) => (
                    <div className="portfolios-block" key={index}>
                         <figure className='portfolios-img'>
                            <img src={slide.imgSrc} alt="" />
                         </figure>
                        
                    </div>
                ))
                
            }
        </Slider>
        </div>
        </div>
    </section>
  )
        
        }

export default Portfolios;