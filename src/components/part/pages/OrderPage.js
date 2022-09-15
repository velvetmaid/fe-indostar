import React from "react";
import { Card, Container, WrapperFlex } from "../../styled/StyledComponents";
import {
  IoIosAdd,
  IoIosRemove,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import "./OrderPage.css";
import { useState } from "react";
import { DataDesignSlider } from "./data/SliderData";
import DesignSlider from "../slider/DesignSlider";

function OrderPage() {
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
    <Container className="bg-last">
      <h1>Karena Promo dan Kuota Terbatas</h1>
      <h2>Yuk Isi Form Pesananmu Sekarang!</h2>
      <p>
        Caranya klik “Saya mau dong” untuk melanjutkan order melalui whatsapp
        admin kami
      </p>
      <Card className="bg-last-card">
        <WrapperFlex>
          <form>
            <div className="form-wrapper">
              <div className="box input-enable">
                <label>
                  <input name="name" placeholder="Nama Lengkap" />
                </label>
              </div>
              <div className="box box-half input-disabled-a">
                <label>
                  <input name="qty" placeholder="Jumlah" disabled />
                </label>
              </div>
              <div className="box box-half input-disabled-b">
                <label>
                  <input name="design" placeholder="Desain" disabled />
                </label>
              </div>
              <div className="box box-half input-disabled-c">
                <label>
                  <input name="code" placeholder="Isi Al'Quran" disabled />
                </label>
              </div>
              <div className="box box-half input-value-a">
                <label>
                  <IoIosRemove onClick={() => RemoveQty()} />
                  <div className="input-numeric">{count}</div>
                  <IoIosAdd onClick={() => AddQty()} />
                </label>
              </div>
              <div className="box box-half input-value-b">
                <label>
                  <IoIosArrowBack />
                  <h4>TESTING</h4>
                  <DesignSlider slides={DataDesignSlider} />
                  <IoIosArrowForward />
                </label>
              </div>
              <div className="box box-half input-value-c">
                <label>
                  <IoIosArrowBack />

                  <IoIosArrowForward />
                </label>
              </div>
              <div className="box box-half preview">
                <label>
                  <input name="code" placeholder="" disabled />
                </label>
              </div>
            </div>
            <div className="button">
              <button onclick="send_handle()" type="submit">
                Saya Mau Dong!
              </button>
            </div>
          </form>
        </WrapperFlex>
      </Card>
    </Container>
  );
}

export default OrderPage;
