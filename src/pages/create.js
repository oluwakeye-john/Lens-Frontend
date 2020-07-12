import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import Button from "../components/button";
import { ErrorMessage } from "../components/text";
import { connect } from "react-redux";

import { updateRoomId, updateCallStatus, updateUser } from "../flow/actions";
import { saveUsername, readUsername } from "../utils/saveUsername";
import { generateRoomId } from "../utils/random";

const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Create = ({ socket, history, setRoomId, setCallStatus, setUser }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [tempId, setTempId] = useState(generateRoomId());

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const roomId = e.target.roomId.value;
    const username = e.target.username.value;
    console.log("room id: ", roomId, username);
    socket.emit("create room", roomId, username);

    socket.on("created new room", (roomId) => {
      setUser(username);
      saveUsername(username);
      setRoomId(roomId);
      setCallStatus("create");
      history.push("/call");
    });

    socket.on("room already exist", (err) => {
      setErrorMessage(err);
    });
  };
  const generateNew = () => {
    setTempId(generateRoomId());
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
              value={tempId}
              onChange={() => {}}
              // readOnly={true}
              name="roomId"
              onClick={generateNew}
            />
            <InputLabel>Meeting ID</InputLabel>

            {/* <ToolTip>
              <CopyToClipboard
                text={tempId}
                style={{ display: "absolute", top: "0" }}
              >
                <Copy className="fas fa-copy" />
              </CopyToClipboard>
              <ToolTipText>Copy</ToolTipText>
            </ToolTip> */}
          </Input>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <Button type="submit">Create</Button>
        </form>
      </Card>
    </CreateContainer>
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

export default connect(null, mapDispatchToProps)(Create);
