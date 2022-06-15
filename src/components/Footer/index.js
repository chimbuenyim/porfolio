import React from "react";
import { FooterLinks, FooterWrapper } from "./styles";
import { Container, Links } from "../UniversalStyle";
import FooterConfig from "../../utils/Config/FooterConfig";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterLinks>
          {FooterConfig.SocialLinks.map((social) => (
            <Links href={social.path} key={social.id}>
              <a>{social.icon}</a>
            </Links>
          ))}
        </FooterLinks>
        {FooterConfig.Copyrights}
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
