import React from "react";
import {
  Container,
  WrapperFlex,
  Card,
  ContainerWrap,
} from "../../styled/StyledComponents";
import "./Packet.css";

function Packet() {
  return (
    <Container className="bg-white">
      <ContainerWrap>
        <h1 className="pkg-heading">SAYA MAU PESAN BERAPA HARGANYA?</h1>
        <h2 className="pkg-heading">
          Berikut Adalah Harga Al-Qur an Custom Nama
        </h2>
        <WrapperFlex>
          <Card className="bronze">
            <h1>Paket Bronze</h1>
            <span>1 Pcs Al-Qur'an</span>
            <h1>
              HARGA<br></br>
              RP 350.000
            </h1>
            <ul>
              <li>Gratis Custom Nama</li>
              <li>Gratis Luxury Box</li>
              <li>Gratis Ucapan</li>
            </ul>
          </Card>

          <Card className="gold">
            <h1>Paket Gold</h1>
            <span>1 Pcs Al-Qur'an</span>
            <h1>
              HARGA<br></br>
              RP 350.000
            </h1>
            <ul>
              <li>Gratis Custom Nama</li>
              <li>Gratis Luxury Box</li>
              <li>Gratis Ucapan</li>
              <li>
                <strong>Gratis 1 Al-Qur an Custom Nama</strong>
              </li>
            </ul>
          </Card>

          <Card className="diamond">
            <h1>Paket Diamond</h1>
            <span>1 Pcs Al-Qur'an</span>
            <h1>
              HARGA<br></br>
              RP 350.000
            </h1>
            <ul>
              <li>Gratis Custom Nama</li>
              <li>Gratis Luxury Box</li>
              <li>Gratis Ucapan</li>
              <li>
                <strong>Gratis 1 Al-Qur an Custom Nama</strong>
              </li>
              <li>
                <strong>
                  Gratis Custom Logo Perusahaan pada cover dan Al-Qur an
                </strong>
              </li>
            </ul>
          </Card>
        </WrapperFlex>
      </ContainerWrap>
    </Container>
  );
}

export default Packet;
