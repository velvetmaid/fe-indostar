import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;

export const ContainerWrap = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: -webkit-center;
  @media only screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const ImgShadow = styled.img`
  max-width: 100%;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Card = styled.div`
  margin: 1rem;
  overflow: hidden;
  border-radius: 8px;
  padding: 1rem;
`;
