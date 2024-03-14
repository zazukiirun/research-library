'use client'
import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"

import ControllSlider from "./keen-slider/ControllSlider";

function KeenSliderContent() {

  const [loading, setLoading] = useState(true)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    // rtl: true,
    slides: {
      perView: 5,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 432px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(e) {
      console.log(e)
      setLoaded(true)
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div>
      <div className="text-sky-200 underline-offset-1 underline font-medium text-[24px] text-center">
        Keen slider
      </div>


      <div className='mt-2'>
        <div className="text-purple-200">Controll Slider</div>
        <ControllSlider loading={loading} />
      </div>


      <div className="divide-zinc-50"></div>

      <div className='mt-2'>
        <div className="text-purple-200">RTL Mode</div>
        <div className="relative flex gap-4">
          {instanceRef.current && currentSlide !== 0 && (
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current.prev()
              } className="w-[24px] h-[611px] opacity-75 absolute left-0 z-50 bg-[#121212CC] flex justify-center items-center">
              <Arrow
                left
                disabled={currentSlide === 0}
              />
            </div>
          )}

          {!loading && <div ref={sliderRef} className="keen-slider">
            {[... new Array(20)].map((_, index) => {
              return (
                <div key={index} className="keen-slider__slide bg-red-500 h-[611px] flex items-center justify-center text-[50px] color-[#fff] font-bold">{index + 1}</div>
              )
            })}
          </div>}

          {instanceRef.current && currentSlide !== instanceRef.current.track.details.slides.length - 1 && (
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current.next()
              } className="w-[24px] h-[611px] absolute right-0 z-50 bg-[#121212CC] flex justify-center items-center">
              <Arrow
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      </div>

      <div className="divide-zinc-50"></div>

      <div className='mt-2'>
        content 3
      </div>
    </div>
  )
}

export default KeenSliderContent

export function Arrow(props) {
  const disabled = props.disabled ? " fill-[#ddda]" : " fill-white"
  return (
    <svg
      onClick={props.onClick}
      className={`w-[14px] h-[14px] transform -translate-y-1/2 -webkit-transform -webkit-translate-y-1/2
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}