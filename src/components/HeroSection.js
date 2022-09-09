import React from "react";
import "../App.css";
import "./HeroSection.css";
import { HeroContainer } from "./styled/StyledComponents";

function HeroSection() {
  return (
    <HeroContainer className="banner-container">
      <div className="banner-wrapper">
        <img src="images/logo.png" className="logo" alt="logo" />
        <h1>Lebih dari Sekedar Al-Qur'an Biasa</h1>
        <p>
          Mushaf Al-Qur'an dengan Sejumlah Fitur untuk Mempermudah Membaca dan
          Menghafal serta Cetak Nama di Sampul Mushaf.
        </p>
        <img src="images/fulllp-01.png" alt="full" />
      </div>
    </HeroContainer>
  );
}

export default HeroSection;
