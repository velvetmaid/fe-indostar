import React from "react";
import {
  Card,
  Container,
  ContainerWrap,
  WrapperFlex,
} from "../../styled/StyledComponents";
import { DataSlider } from "../pages/data/SliderData";
import "./OrderPage.css";
import DesignSlider from "../slider/DesignSlider";

function OrderPage() {
  return (
    <Container className="bg-last">
      <ContainerWrap>
        <h1>Karena Promo dan Kuota Terbatas</h1>
        <h2>Yuk Isi Form Pesananmu Sekarang!</h2>
        <p>Caranya klik “Saya mau dong” untuk melanjutkan</p>
        <p>order melalui whatsapp admin kami</p>
        <Card className="bg-last-card">
          <WrapperFlex>
            <form>
              <div className="form-wrapper">
                <DesignSlider slides={DataSlider} />
              </div>
              <div className="button">{sendButtonWa()}</div>
            </form>
          </WrapperFlex>
        </Card>
      </ContainerWrap>
    </Container>
  );

  function sendButtonWa() {
    return (
      <button
        onclick='window.location.href = "https://stackoverflow.com"'
        type="submit"
      >
        Saya Mau Dong!
      </button>
    );
  }
}

export default OrderPage;
