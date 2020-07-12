import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../components/card";
import Button from "../components/button";

const HelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const HelpCard = styled(Card)`
  text-align: center;
`;

const StyledNumber = styled.div`
  border-radius: 50%;
  width: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.primaryColor1};
  color: white;
  display: inline-block;
`;

const StepText = styled.p`
  text-align: left;
  line-height: 1.8;
`;

const steps = [
  "Visit the dashboard and click 'new call'.  This will take you to the 'create page'. ",
  "A meeting ID will be automatically generated for you. It is read-only. ",
  "To generate a new ID, tap on the current meeting ID box. ",
  "Input your name (This will be shown to anyone you are calling). ",
  "Click 'create'. MAKE SURE YOU ACCEPT THE PERMISSION BOX. ",
  "On the Call Page, tap the invite(plus) button to add new participants. ",
  "You can send the link via WhatsApp, Twitter or copy and then share it. ",
  "To join a call, simply click the invite link sent to you and then input your name. ",
  "Click 'join'. Again, MAKE SURE YOU ACCEPT THE PERMISSION BOX. ",
  "And,... Voila, you're in..",
];

const Help = ({ history }) => {
  const [presentStep, setPresentStep] = useState(0);
  const changeStep = (val) => {
    setPresentStep(presentStep + val);
  };
  return (
    <HelpContainer>
      <HelpCard>
        <div>
          <StyledNumber>{presentStep + 1}</StyledNumber>
          <StepText>{steps[presentStep]}</StepText>
        </div>

        {presentStep === 0 ? (
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => changeStep(-1)}
            disabled
          >
            <span className="fas fa-chevron-left" />
          </Button>
        ) : (
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => changeStep(-1)}
          >
            <span className="fas fa-chevron-left" />
          </Button>
        )}
        {presentStep === steps.length - 1 ? (
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => history.push("/dashboard")}
          >
            <span>Start</span>
          </Button>
        ) : (
          <Button style={{ marginRight: "10px" }} onClick={() => changeStep(1)}>
            <span className="fas fa-chevron-right" />
          </Button>
        )}
      </HelpCard>
    </HelpContainer>
  );
};

export default Help;
