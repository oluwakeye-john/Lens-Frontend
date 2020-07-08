import React from "react";
import styled from "styled-components";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import Button from "../components/button";

const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const CardExtra = styled.div`
  font-size: small;
  margin-bottom: 2rem;
`;

const CardCheck = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Join = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <JoinContainer>
      <Card>
        <form onSubmit={handleSubmitForm}>
          <CardHeading>Join Meeting</CardHeading>
          <Input>
            <InputBox
              type="text"
              placeholder=" "
              required
              defaultValue="John"
            />
            <InputLabel>Name</InputLabel>
          </Input>
          <Input>
            <InputBox type="text" placeholder=" " required />
            <InputLabel>Enter Meeting ID</InputLabel>
          </Input>
          <CardExtra>
            <CardCheck>
              <input type="checkbox" name="mute-audio" />
              Do Not Connect My Audio
            </CardCheck>
            <CardCheck>
              <input type="checkbox" name="mute-video" />
              Turn off my video
            </CardCheck>
          </CardExtra>
          <Button type="submit">Join</Button>
        </form>
      </Card>
    </JoinContainer>
  );
};

export default Join;
