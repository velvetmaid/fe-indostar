import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className="image" alt="none" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
