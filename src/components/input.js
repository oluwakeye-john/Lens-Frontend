import styled from "styled-components";

export const Input = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
`;

export const InputBox = styled.input`
  padding: 10px 10px;
  width: 100%;
  border-radius: 8px;
  border: 0;
  background-color: white;
  /* border: 1px solid #ccc; */
  border-bottom: 1px solid #ccc;

  &:focus {
    outline: 0;
  }

  &:focus + label {
    font-size: small;
    transform: translateY(-15px);
  }

  &:not(:placeholder-shown) + label {
    font-size: small;
    transform: translateY(-15px);
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px 10px;
  transition: 0.2s;
  background-color: white;
  pointer-events: none;
`;
