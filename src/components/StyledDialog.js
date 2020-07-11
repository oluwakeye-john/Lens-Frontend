import styled from "styled-components";
import { Card } from "./card";

export const StyledDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StyledDialogBox = styled(Card)`
  background-color: #fff;
  box-shadow: none;
`;

export const StyledDialogList = styled.ul`
  list-style-type: none;
`;
