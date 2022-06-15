import styled from "styled-components";
import { Container, Title } from "../UniversalStyle";

export const ContactWrapper = styled.section`
  background-color: ${({ theme }) => theme.defaultColor.colorWhite};
  color: ${({ theme }) => theme.defaultColor.colorBlack};
  display: flex;
  padding: 100px 0;
  font-size: 1.2rem;
  width: 100%;
  letter-spacing: 1px;

  ${Container} {
    ${Title} {
      &::before {
        background: ${({ theme }) => theme.defaultColor.colorBlack};
      }
      &::after {
        content: "...";
        background: ${({ theme }) => theme.defaultColor.colorWhite};
      }
    }

    @media (max-width: 1500px) {
      width: 80%;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const ContactDetails = styled.div`
  width: 45%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ContactDetailCard = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 5px 0;

  svg {
    color: crimson;
    font-size: 2rem;
    min-width: 30px;
    min-height: 30px;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h4 {
    text-transform: capitalize;
  }
`;
export const ContactMail = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  input,
  textarea {
    font-family: ${({ theme }) => theme.font};
    font-size: 1.2rem;
    width: 100%;
    padding: 13px 10px;
    border-radius: 10px;
    font-weight: 600;
    border: 0;
    outline: 0;
    box-shadow: 0 0 1px 1px #aaa;
    background-color: transparent;
    resize: none;

    &:focus {
      outline: 0;
      box-shadow: 0 0 5px 1px #aaa;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;
