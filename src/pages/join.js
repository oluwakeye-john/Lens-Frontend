import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import Button from "../components/button";
import { ErrorMessage } from "../components/text";
import { connect } from "react-redux";

import { updateRoomId, updateCallStatus, updateUser } from "../flow/actions";
import { saveUsername, readUsername } from "../utils/saveUsername";

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

const Join = ({
  socket,
  history,
  setRoomId,
  setCallStatus,
  setUser,
  match,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const defLink = match ? (match.params.id ? match.params.id : "") : "";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const roomId = e.target.roomId.value;
    const username = e.target.username.value;
    console.log("room id: ", roomId, username);
    socket.emit("join room", roomId, username);

    socket.on("room joined", (roomId) => {
      console.log("room joined");
      setUser(username);
      saveUsername(username);
      setRoomId(roomId);
      setCallStatus("join");
      history.push("/call");
    });

    socket.on("Room full", (err) => {
      setErrorMessage(err);
    });

    socket.on("room not exist", (err) => {
      setErrorMessage(err);
    });
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
              defaultValue={readUsername()}
              name="username"
            />
            <InputLabel>Name</InputLabel>
          </Input>
          <Input>
            <InputBox
              type="text"
              placeholder=" "
              required
              name="roomId"
              value={defLink}
            />
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
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <Button type="submit">Join</Button>
        </form>
      </Card>
    </JoinContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoomId: (val) =>
      dispatch({
        type: updateRoomId,
        payload: val,
      }),

    setCallStatus: (val) =>
      dispatch({
        type: updateCallStatus,
        payload: val,
      }),

    setUser: (val) =>
      dispatch({
        type: updateUser,
        payload: val,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Join);
