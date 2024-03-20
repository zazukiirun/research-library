'use client'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"

function ControllSlider({
  loading
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="flex gap-4">
      {instanceRef.current && (
        <div
          onClick={(e) =>
            e.stopPropagation() || instanceRef.current.prev()
          } className="w-[40px] h-[400px] bg-slate-800 flex justify-center items-center">
          <Arrow
            left
            disabled={currentSlide === 0}
          />
        </div>
      )}
      {!loading && <div ref={sliderRef} className="keen-slider">
        {[... new Array(20)].map((_, index) => {
          return (
            <div key={index} className="keen-slider__slide bg-pink-500 flex items-center justify-center text-[50px] color-[#fff] font-bold h-[300px]">{index + 1}</div>
          )
        })}
      </div>}
      {instanceRef.current && (
        <div
          onClick={(e) =>
            e.stopPropagation() || instanceRef.current.next()
          } className="w-[40px] h-[400px] bg-slate-800 flex justify-center items-center">
          <Arrow

          // disabled={
          //   currentSlide ===
          //   instanceRef.current.track.details.slides.length - 1
          // }
          />
        </div>
      )}
    </div>
  )
}

export default ControllSlider

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