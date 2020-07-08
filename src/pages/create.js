import React from "react";
import styled from "styled-components";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import Button from "../components/button";

const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Create = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <CreateContainer>
      <Card>
        <form onSubmit={handleSubmitForm}>
          <CardHeading>Create Meeting</CardHeading>
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
            <InputBox
              type="text"
              placeholder=" "
              required
              disabled
              value="2764292900"
            />
            <InputLabel>Meeting ID</InputLabel>
          </Input>
          <Button type="submit">Create</Button>
        </form>
      </Card>
    </CreateContainer>
  );
};

export default Create;
