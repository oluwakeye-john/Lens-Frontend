import styled from "styled-components";

export const RemoteVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 90vh;
  width: 100vw;
  background-color: black;
`;

export const LocalVideo = styled.video`
  position: absolute;
  bottom: 12vh;
  right: 1vh;
  border: 1px solid #ccc;
  max-width: 180px;
  max-height: 180px;
  border-radius: 5px;
`;

export const CallSettings = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10vh;
  background-color: black;
  width: 100%;
  box-shadow: 0 0 5px #ccc;

  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  color: white;
  align-items: center;
`;

export const CallOptionItem = styled.div`
  /* padding: 10px; */
  /* width: 100px; */
  margin: 0;
  border: 0;
  display: inline-block;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #333333;
    border-radius: 50%;
  }
  padding: 10px 10px;
`;

export const CallOptionItemText = styled.div`
  text-align: center;
`;
