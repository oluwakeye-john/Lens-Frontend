import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  color: white;
  background-color: ${({ theme }) => theme.primaryColor1};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()}</p>
      <p>By Oluwakeye John</p>
    </FooterContainer>
  );
};

export default Footer;
