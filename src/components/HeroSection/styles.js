import Image from "next/image";
import styled from "styled-components";
import { Container } from "../UniversalStyle";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  ${Container} {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;

    @media (max-width: 2000px) {
      width: 90%;
    }
    @media (max-width: 950px) {
      width: 90%;
    }
  }
`;

export const HeroTextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 70%;
  text-align: right;
  height: 100%;
  p {
    font-size: xx-large;
    width: fit-content;
  }
  h1 {
    font-size: 75px;
    width: fit-content;

    @media (max-width: 960px) {
      font-size: 50px;
    }
    @media (max-width: 450px) {
      margin-top: 1rem;
      font-size: 35px;
    }
  }
  h4 {
    font-size: 35px;
    @media (max-width: 450px) {
      font-size: xx-large;
      font-weight: 400;
      margin-top: 1rem;
    }
  }

  a {
    margin-top: 30px;
    width: 200px;
    font-size: xx-large;
    text-decoration: none;
    padding: 10px;
    background-color: firebrick;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.overlay};
    height: 100%;
  }
`;
export const HeroImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #000000;

  @media (max-width: 960px) {
    width: 100%;
    border-radius: 0;
    z-index: -10;
  }
`;
