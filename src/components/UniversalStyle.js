import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;

  @media (max-width: 960px) {
    width: 90%;
  }
`;

export const Links = styled(Link)`
  font-size: 1.5rem;
  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
  padding-bottom: 20px;
  font-family: "Ubuntu", sans-serif;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    transform: translateX(-50%);
  }

  &::after {
    position: absolute;
    bottom: -5px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.2rem;
  border-radius: 7px;
  cursor: pointer;
  background-color: crimson;
  color: ${({ theme }) => theme.defaultColor.colorWhite};
  border: 2px solid crimson;

  &:hover {
    background-color: ${({ theme }) => theme.defaultColor.colorWhite};
    border: 2px solid crimson;
    color: crimson;
    transition: all 0.5s ease;
  }
`;
