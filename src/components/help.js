import React from "react";
import styled from "styled-components";

const HelpButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  color: black;
`;

const Help = () => {
  return (
    <HelpButton>
      <span className="fas fa-question fa-2x" />
    </HelpButton>
  );
};

export default Help;
