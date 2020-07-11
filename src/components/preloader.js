import React from "react";
import styled from "styled-components";

const PreloaderContainer = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor1};
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <div>
        <span
          className="fas fa-compact-disc fa-spin fa-2x"
          style={{ fontSize: "4rem" }}
        />
      </div>
    </PreloaderContainer>
  );
};

export default Preloader;
