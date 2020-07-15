import React, { useEffect, useState } from "react";

import {
  LocalVideo,
  RemoteVideo,
  CallOptionItem,
  CallSettings,
  CallContainer,
} from "../components/call-styles";

import {
  StyledDialogBox,
  StyledDialogContainer,
  StyledDialogList,
} from "../components/StyledDialog";

import { ToolTipRelative, ToolTipTextRelative } from "../components/toolTip";

import { connect } from "react-redux";
import { updateCallStatus, updateRoomId } from "../flow/actions";

import { CopyToClipboard } from "react-copy-to-clipboard";

const constraints = {
  video: true,
  audio: true,
};

const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
};

const Call = ({
  socket,
  user,
  callStatus,
  setCallStatus,
  setRoomId,
  roomId,
  history,
  callInfo,
}) => {
  const roomLink = `${window.location.origin}/join/${roomId}`;
  const [muteAudio, setMuteAudio] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);

  const [showInvite, setShowInvite] = useState(false);
  const [showParticipant, setShowParticipant] = useState(false);

  const [patner, setPatner] = useState("");

  let peerConnection;
  let stream;

  const sendCalleeOffer = (id) => {
    console.log(`Sending offer to ${id}`);
    peerConnection = new RTCPeerConnection(config);
    const localVideo = document.querySelector("#local-video");
    const remoteVideo = document.querySelector("#remote-video");
    const stream = localVideo.srcObject;

    stream
      .getTracks()
      .forEach((track) => peerConnection.addTrack(track, stream));

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", id, event.candidate);
      }
    };

    peerConnection.ontrack = (event) => {
      remoteVideo.srcObject = event.streams[0];
    };

    peerConnection
      .createOffer()
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        socket.emit("offer", id, peerConnection.localDescription, user);
      });
  };

  const receiveCalleeAnswer = (id, msg, user2) => {
    peerConnection.setRemoteDescription(msg);
    setPatner(user2);
  };

  const receiveCallerOffer = (id, msg, user2) => {
    setPatner(user2);
    peerConnection = new RTCPeerConnection(config);
    peerConnection.setRemoteDescription(msg);

    const localVideo = document.querySelector("#local-video");
    const remoteVideo = document.querySelector("#remote-video");
    const stream = localVideo.srcObject;

    stream
      .getTracks()
      .forEach((track) => peerConnection.addTrack(track, stream));

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", id, event.candidate);
      }
    };

    peerConnection.ontrack = (event) => {
      remoteVideo.srcObject = event.streams[0];
    };

    peerConnection
      .createAnswer()
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        socket.emit("answer", id, peerConnection.localDescription, user);
      });
  };

  const setCandidate = (id, candidate) => {
    console.log("setting candidate");
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
  };

  const setInitialCallInfo = () => {
    const localVideo = document.querySelector("#local-video");
    console.log("call info", callInfo);
    if (callInfo) {
      if (callInfo.muteAudio) {
        setMuteAudio(true);
        localVideo.srcObject.getAudioTracks()[0].enabled = true;
      }
      if (callInfo.muteVideo) {
        setMuteVideo(true);
        localVideo.srcObject.getVideoTracks()[0].enabled = true;
      }
    }
  };

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    if (!roomId) {
      history.push("/create");
      return;
    }
    const localVideo = document.querySelector("#local-video");
    const remoteVideo = document.querySelector("#remote-video");
    navigator.mediaDevices.getUserMedia(constraints).then((s) => {
      console.log("got stream");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      stream = s;
      localVideo.srcObject = stream;
      localVideo.muted = true;
      setInitialCallInfo();

      if (callStatus === "create") {
        console.log("creating call");
        socket.on("new user", (user) => {
          console.log("caller requesting", user.username, user.socketId);
          sendCalleeOffer(user.socketId);
        });
        socket.on("member disconnect", () => {
          setPatner("");
          remoteVideo.srcObject = null;
          alert("The other user disconnected");
        });
        socket.on("answer", (id, message, usr) => {
          receiveCalleeAnswer(id, message, usr);
        });
        socket.on("candidate", (id, candidate) => {
          setCandidate(id, candidate);
        });
      } else {
        console.log("receive call");
        socket.emit("callee ready");
        socket.on("offer", (id, message, usr) => {
          console.log("receiving offer ", id, message, usr);
          receiveCallerOffer(id, message, usr);
        });
        socket.on("candidate", (id, candidate) => {
          setCandidate(id, candidate);
        });
        socket.on("room closed", () => {
          alert("The meeting host has disconnected");
        });
      }
    });

    return () => {
      document.querySelector("body").style.overflow = "visible";
      endStream();
    };
  }, []);

  const endStream = () => {
    try {
      setCallStatus("join");
      stream.getTracks().forEach((track) => track.stop());
      console.log("unmounted");
      socket.emit("disconnectPeer");
      setRoomId(null);
      setCallStatus("join");
      peerConnection.close();
    } catch {
      console.log("error");
    }
  };

  const handleAudioMute = (e) => {
    const localVideo = document.querySelector("#local-video");
    if (localVideo.srcObject) {
      setMuteAudio(!muteAudio);
      localVideo.srcObject.getAudioTracks()[0].enabled = muteAudio;
    }
  };

  const handleVideoMute = (e) => {
    const localVideo = document.querySelector("#local-video");
    if (localVideo.srcObject) {
      setMuteVideo(!muteVideo);
      localVideo.srcObject.getVideoTracks()[0].enabled = muteVideo;
    }
  };

  const handleEndCall = () => {
    history.push("/dashboard");
  };

  const handleInvite = () => {
    setShowInvite(!showInvite);
  };

  const handleParticipant = () => {
    setShowParticipant(!showParticipant);
  };

  return (
    <CallContainer style={{ zIndex: "4" }}>
      <RemoteVideo autoPlay id="remote-video"></RemoteVideo>
      <LocalVideo autoPlay id="local-video" mute></LocalVideo>
      <CallSettings>
        <ToolTipRelative>
          <CallOptionItem onClick={handleVideoMute}>
            <div
              className="fas fa-video fa-1x fa-fw"
              style={{ color: muteVideo ? "red" : "" }}
            />
          </CallOptionItem>
          <ToolTipTextRelative>
            {muteVideo ? "Start" : "Stop"} Video
          </ToolTipTextRelative>
        </ToolTipRelative>

        <ToolTipRelative>
          <CallOptionItem onClick={handleInvite}>
            <div className="fas fa-plus-circle fa-1x fa-fw" />
          </CallOptionItem>
          <ToolTipTextRelative>Invite</ToolTipTextRelative>
        </ToolTipRelative>

        <ToolTipRelative>
          <CallOptionItem onClick={handleAudioMute}>
            <div
              className="fas fa-microphone fa-1x fa-fw"
              style={{ color: muteAudio ? "red" : "" }}
            />
          </CallOptionItem>
          <ToolTipTextRelative>
            {muteAudio ? "Start" : "Stop"} Audio
          </ToolTipTextRelative>
        </ToolTipRelative>

        <ToolTipRelative>
          <CallOptionItem onClick={handleParticipant}>
            <div className="fas fa-users fa-1x fa-fw" />
          </CallOptionItem>
          <ToolTipTextRelative>Participants</ToolTipTextRelative>
        </ToolTipRelative>

        <ToolTipRelative>
          <CallOptionItem onClick={handleEndCall}>
            <div className="fas fa-times fa-1x fa-fw" />
            <ToolTipTextRelative>End Call</ToolTipTextRelative>
          </CallOptionItem>
        </ToolTipRelative>
      </CallSettings>

      <div
        style={{ display: showInvite ? "block" : "none" }}
        onClick={() => {
          setShowInvite(false);
        }}
      >
        <StyledDialogContainer>
          <StyledDialogBox>
            <StyledDialogList>
              <h2>Invite</h2>
              <p>
                <a
                  href={`whatsapp://send?text=${roomLink}`}
                  data-action="share/whatsapp/share"
                >
                  Invite via Whatsapp{" "}
                </a>
              </p>
              <p>
                <a href={`https://twitter.com/intent/tweet?text=${roomLink}`}>
                  Invite via Twitter{" "}
                </a>
              </p>
              <CopyToClipboard text={roomLink}>
                {/*eslint-disable-next-line */}
                <a href="#">Copy Link</a>
              </CopyToClipboard>
            </StyledDialogList>
          </StyledDialogBox>
        </StyledDialogContainer>
      </div>

      <div
        style={{ display: showParticipant ? "block" : "none" }}
        onClick={() => {
          setShowParticipant(false);
        }}
      >
        <StyledDialogContainer>
          <StyledDialogBox>
            <StyledDialogList>
              <h2>Participants</h2>
              <p>You</p>
              <p>{patner}</p>
            </StyledDialogList>
          </StyledDialogBox>
        </StyledDialogContainer>
      </div>
    </CallContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    callStatus: state.callStatus,
    roomId: state.roomId,
    callInfo: state.callInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCallStatus: (val) =>
      dispatch({
        type: updateCallStatus,
        payload: val,
      }),
    setRoomId: (val) =>
      dispatch({
        type: updateRoomId,
        payload: val,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Call);
