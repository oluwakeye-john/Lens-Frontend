import React from "react";
import styled from "styled-components";

const RemoteVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 90vh;
  width: 100vw;
`;

const CallSettings = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10vh;
  background-color: black;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  color: white;
  align-items: center;
`;

const CallOptionItem = styled.div`
  /* padding: 10px; */
  width: 100px;
  margin: 0;
  border: 0;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    border-radius: 8px;
  }
`;

const CallOptionItemText = styled.div`
  text-align: center;
`;

const Call = () => {
  return (
    <div>
      <RemoteVideo autoplay controls />
      <CallSettings>
        <CallOptionItem>
          <div
            className="fas fa-video fa-1x fa-fw"
            style={{ color: "red", width: "100%" }}
          />
          <CallOptionItemText>Stop Mute</CallOptionItemText>
        </CallOptionItem>
        <CallOptionItem>
          <div
            className="fas fa-microphone fa-1x fa-fw"
            style={{ width: "100%" }}
          />
          <CallOptionItemText>Mute</CallOptionItemText>
        </CallOptionItem>
        <CallOptionItem>
          <div
            className="fas fa-times fa-1x fa-fw"
            style={{ color: "red", width: "100%" }}
          />
          <CallOptionItemText>Call End</CallOptionItemText>
        </CallOptionItem>
        <CallOptionItem>
          <div
            className="fas fa-users fa-1x fa-fw"
            style={{ color: "red", width: "100%" }}
          />
          <CallOptionItemText>Participants</CallOptionItemText>
        </CallOptionItem>
      </CallSettings>
    </div>
  );
};

export default Call;
