import React from "react";
import styledComponents from "styled-components";
import { Container } from "../../UniversalStyle";
import Experience from "./Experience";
import Skills from "./Skills";

const Skills_Experience_Wrapper = styledComponents.section`
display:flex;
`;

const Skills_Experience = () => {
  return (
    <Skills_Experience_Wrapper>
      <Container>
        <Skills />
        <Experience />
      </Container>
    </Skills_Experience_Wrapper>
  );
};

export default Skills_Experience;
