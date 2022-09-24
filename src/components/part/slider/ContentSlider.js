import React, { useState } from "react";
import { DataSlider } from "../pages/data/SliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../slider/ImageSlider.css";

function ContentSlider({ slides }) {
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
    <>
      {DataSlider.map((slide, index) => {
        return (
          <>
            {index === current && (
              <>
                <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
                <input className="input-val" id="valContent" name="content" value={slide.content} />
                <IoIosArrowForward
                  className="right-arrow"
                  onClick={nextSlide}
                />
              </>
            )}
          </>
        );
      })}
    </>
  );
}

export default ContentSlider;
