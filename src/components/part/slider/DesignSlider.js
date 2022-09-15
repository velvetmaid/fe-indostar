import React, { useState } from "react";
import { DataDesignSlider } from "../pages/data/SliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function DesignSlider({ slides }) {
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
      {DataDesignSlider.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} className="image" alt="none" />
                <h1>{slide.design}</h1>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DesignSlider;
