import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: lightred;
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

export const RightButton = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};

export default Button;
