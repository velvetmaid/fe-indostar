import React from "react";
import styled from "styled-components";

const WrapperVariant = styled.div`
  margin: 0;
`;

const VariantImg = styled.img`
  width: 100%;
  height: 100%;
`;

function Variant() {
  return (
    <WrapperVariant>
      <VariantImg
        src="images/varian isi-01.png"
        alt="Varian Isi"
        className="img-varian"
      ></VariantImg>
    </WrapperVariant>
  );
}

export default Variant;
