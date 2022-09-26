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
  const handleSubmit = (event) => {
    event.preventDefault();

    let num = "6282258640991";
    let msg = "*Saya Mau Dong !*";
    let url = `https://wa.me/${num}?text=${msg}`;

/*     url += `?text=${msg}'`; */
    /* url += `&text=${encodeURI()}&app_absent=0`;
     */
    window.open(url);

    console.log("form submitted ✅");
  };
  return (
    <Container className="bg-last">
      <ContainerWrap>
        <h1>Karena Promo dan Kuota Terbatas</h1>
        <h2>Yuk Isi Form Pesananmu Sekarang!</h2>
        <p>
          Caranya klik “Saya mau dong” untuk melanjutkan<br></br>order melalui
          whatsapp admin kami
        </p>
        <Card className="bg-last-card">
          <WrapperFlex>
            <form onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <DesignSlider slides={DataSlider} />
              </div>
              <div className="button">
                <button
                  class="sendFormWa"
                  type="submit"
                  title="Send to WhatsApp"
                >
                  Saya Mau Dong!
                </button>
              </div>
            </form>
          </WrapperFlex>
        </Card>
      </ContainerWrap>
    </Container>
  );
}

export default OrderPage;
