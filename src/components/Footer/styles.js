import styled from "styled-components";
import { Container, Links } from "../UniversalStyle";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  text-align: center;
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    gap: 20px;

    @media (max-width: 650px) {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 10px;
    font-size: 2rem;
  }
`;
