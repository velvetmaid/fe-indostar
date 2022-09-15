import React from "react";
import ImageSlider from "../slider/ImageSlider";
import { HeroContainer, WrapperFlex } from "../../styled/StyledComponents";
import { DataImageSlider } from "../pages/data/SliderData";
import './CustomPage.css'

function CustomPage() {
  return (
    <HeroContainer className="container">
      <WrapperFlex>
        <div className="description">
          <h1> Al - Qur 'an Custom Nama</h1>
          <p>
            "Dilengkapi dengan berbagai fitur desain yang menarik, menjadikan
            kita lebih bersemengat dan termotivasi untuk membaca dan menghafal.
            "
          </p>
        </div>
        <ImageSlider slides={DataImageSlider} />
      </WrapperFlex>
    </HeroContainer>
  );
}

export default CustomPage;
