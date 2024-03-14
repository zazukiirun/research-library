import React, { createRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function ReactSlickCustomized({
  title,
  bg,
  sliderSettings
}) {

  const customeSlider = createRef();

  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   console.log('Ref customeSlider', customeSlider.current)
  // }, [customeSlider])

  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }

  return (
    <div>

      <div className="text-sky-200 underline-offset-1 underline text-center">{title || '-'}</div>
      <div>


        <div className=" relative">
          <div className=" absolute top-0 h-[400px] left-0 z-50">
            <div
              onClick={(e) =>
                gotoPrev()
              } className="w-[24px] h-full opacity-75 absolute left-0 z-50 bg-[#121212CC] flex justify-center items-center">
              <BiChevronLeft
                className={`w-[40px] h-[40px]`}
              />
            </div>
          </div>

          <Slider
            {...sliderSettings}
            ref={customeSlider}
            beforeChange={(current, next) => {
              console.log(current, next)
              setCurrentSlide(next)
            }}
          // afterChange={
          //   (current) => {
          //     console.log(current)
          //   }
          // }
          >
            {[... new Array(10)].map((_, index) => (
              <div className={`h-[400px] bg-black px-6`}>
                <div className={`${bg || 'bg-sky-400'} h-full w-full text-center color-[#fff] font-bold`}>
                  {index + 1}
                </div>
              </div>
            ))}
          </Slider>

          <div className=" absolute top-0 h-[400px] right-6 z-50">
            <div
              onClick={(e) =>
                gotoNext()
              } className="w-[24px] h-full opacity-75 absolute left-0 z-50 bg-[#121212CC] flex justify-center items-center">
              <BiChevronRight
                className={`w-[40px] h-[40px]`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5 mx-6 mt-2">
          <button className="w-[50px] h-[50px] border flex justify-center items-center border-red-400 rounded-full active:bg-red-300 font-bold"
            onClick={() => gotoNext()}>
            <BiChevronLeft
              className={`w-[30px] h-[30px]`}
            />
          </button>
          <button className="w-[50px] h-[50px] border flex justify-center items-center border-red-400 rounded-full active:bg-red-300 font-bold"
            onClick={() => gotoPrev()}>
            <BiChevronRight
              className={`w-[30px] h-[30px]`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReactSlickCustomized