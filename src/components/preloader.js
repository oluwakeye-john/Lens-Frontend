import React from "react";
import styled from "styled-components";

const PreloaderContainer = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor1};
  text-align: center;
`;

const PreloaderText = styled.p`
  color: black;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <div>
        <span
          className="fas fa-compact-disc fa-spin fa-2x"
          style={{ fontSize: "4rem" }}
        />
        <PreloaderText>Waiting for API...</PreloaderText>
      </div>
    </PreloaderContainer>
  );
};

export default Preloader;
