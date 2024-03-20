import React, { createRef, useEffect, useState } from "react";
import Divivder from "./divider/Divivder";
import ReactSlickCustomized from "./react-slick/ReactSlickCustomized";

function ReactSlick() {

  return (
    <div>
      <div className="text-sky-200 underline-offset-1 underline font-medium text-[24px] text-center">
        ReactSlick
      </div>

      <Divivder />

      <div>
        <ReactSlickCustomized
          title={'SimpleSlider'}
          sliderSettings={{
            arrows: false,
          }}
          bg={'bg-red-400'}
        />
      </div>


      <Divivder />

      <div>
        <ReactSlickCustomized
          title={'Pause On Hover x Center Mode'}
          sliderSettings={{
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            // className: "center",
            // centerMode: true,
            // centerPadding: "60px",
            pauseOnHover: true,
            arrows : false
          }}
          bg={'bg-indigo-400'}
        />
      </div>


      <Divivder />

      <div>
        <ReactSlickCustomized
          title={'Focus On Select x Center Mode'}
          sliderSettings={{
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            speed: 500,
            arrows : false
          }}
          bg={'bg-sky-400'}
        />
      </div>

      <Divivder />

      <div>
        <ReactSlickCustomized
          title={'Fade'}
          sliderSettings={{
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            waitForAnimate: false
          }}
          bg={'bg-purple-400'}
        />
      </div>

      <Divivder />

      <div >
        <ReactSlickCustomized
          title={'Multiple Items'}
          sliderSettings={{
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
          }}
          bg={'bg-green-400'}
        />
      </div>

      <Divivder />

      <div >
        <ReactSlickCustomized
          title={'Responsive'}
          sliderSettings={{
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            centerPadding: '10px',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }}
          bg={'bg-rose-400'}
        />
      </div>

      <Divivder />

      <div >
        <ReactSlickCustomized
          title={'Center Mode'}
          sliderSettings={{
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            arrows: false,
            slidesToShow: 3,
            speed: 500,
          }}
          bg={'bg-violet-400'}
        />
      </div>

      <Divivder />

      <div >
        <ReactSlickCustomized
          title={'AutoPlay'}
          sliderSettings={{
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            arrows: false,
            autoplaySpeed: 2000,
            cssEase: "linear",
          }}
          bg={'bg-indigo-400'}
        />
      </div>
    </div>
  )
}

export default ReactSlick