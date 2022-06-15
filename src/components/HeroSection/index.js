import React from "react";
import { HeroImage, HeroTextSection, HeroWrapper, ImageStyle } from "./styles";
import { Container } from "../UniversalStyle";
import MyPicture from "../../assets/mypicture.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <HeroWrapper id="home">
      <Container>
        <HeroTextSection>
          <p>Hi... I&apos;m</p>
          <h1>Chukwuemeka Obioha, Duruji</h1>
          <h4>
            a <span className="typed-cursor">Digital Artist</span>
            <span className="typed-cursor">|</span>
          </h4>
          <Link href={""}>
            <a>Hire Me</a>
          </Link>
        </HeroTextSection>{" "}
        <HeroImage style={ImageStyle} src={MyPicture} alt="My Picture" />
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
