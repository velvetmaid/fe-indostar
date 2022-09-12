import React from "react";
import Product from "./part/pages/Product";
import CustomPage from "./part/pages/CustomPage";
import Variant from "./part/pages/Variant";
import Packet from "./part/pages/Packet";
import OrderPage from "./part/pages/OrderPage";

function CentralSection() {
  return (
    <>
      <CustomPage />
      <Variant />
      <Product />
      <Packet />
      <OrderPage />
    </>
  );
}

export default CentralSection;
