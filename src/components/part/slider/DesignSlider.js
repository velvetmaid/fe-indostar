import React, { useState } from "react";
import { DataSlider } from "../pages/data/SliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import ContentSlider from "./ContentSlider";
import "../pages/OrderPage.css";

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
    <div className="slider2">
      {DataSlider.map((slide, index) => {
        return (
          <>
            {index === current && (
              <>
                <div className="box input-enable">
                  <label>
                    <input
                      id="valName"
                      name="name"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </label>
                </div>
                <div className="box box-half input-disabled-a">
                  <label>
                    <input placeholder="Jumlah" disabled />
                  </label>
                </div>
                <div className="box box-half input-disabled-b">
                  <label>
                    <input placeholder="Desain" disabled />
                  </label>
                </div>
                <div className="box box-half input-disabled-c">
                  <label>
                    <input placeholder="Isi Al'Quran" disabled />
                  </label>
                </div>
                <div className="box box-half input-value-a">
                  <label>{SlideJumlah()}</label>
                </div>
                <div className="box box-half input-value-b">
                  <label>
                    <IoIosArrowBack
                      className="left-arrow"
                      onClick={prevSlide}
                    />
                    <input
                      className="input-val"
                      id="valDesign"
                      name="design"
                      value={slide.design}
                    />
                    <IoIosArrowForward
                      className="right-arrow"
                      onClick={nextSlide}
                    />
                  </label>
                </div>
                <div className="box box-half input-value-c">
                  <label>
                    <ContentSlider slides={DataSlider} />
                  </label>
                </div>
                <div className="box box-half preview">
                  <label>
                    <img className="preview-img" src={slide.image} alt="" />
                  </label>
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );

  function SlideJumlah() {
    const [count, useCounter] = useState(0);

    const AddQty = () => {
      useCounter(count + 1);
    };
    const RemoveQty = () => {
      let value = 0;
      if (count <= value) {
        value = 1;
      } else {
        value = count;
      }
      useCounter(value - 1);
    };
    return (
      <>
        <IoIosRemove onClick={() => RemoveQty()} />
        <input className="input-val" id="valQty" name="qyt" value={count} />
        <IoIosAdd onClick={() => AddQty()} />
      </>
    );
  }
}

export default DesignSlider;
