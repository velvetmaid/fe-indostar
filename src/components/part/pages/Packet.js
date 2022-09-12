import React from "react";
import { Container, WrapperFlex, Card } from "../../styled/StyledComponents";
import "./Packet.css";

function Packet() {
  return (
    <Container className="bg-white">
      <h1>SAYA MAU PESAN BERAPA HARGANYA?</h1>
      <h2>Berikut Adalah Harga Al-Qur an Custom Nama</h2>
      <WrapperFlex>
        <Card className="bronze"><h1>Paket Bronze</h1></Card>
        <Card className="gold"><h1>Paket Gold</h1></Card>
        <Card className="diamond"><h1>Paket Diamond</h1></Card>
      </WrapperFlex>
    </Container>
  );
}

export default Packet;
