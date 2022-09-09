import React from "react";
import Product from "./part/pages/Product";
import CustomPage from "./part/pages/CustomPage";
import Variant from "./part/pages/Variant";

function CentralSection() {
  return (
    <>
      <CustomPage />
      <Variant />
      <Product />

    </>
  );
}


export default CentralSection;
