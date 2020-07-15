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
      <p>
        <a
          href="https://twitter.com/oluwakeyejohn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          By Oluwakeye John
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
