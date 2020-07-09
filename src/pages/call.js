import React, { useEffect, useState } from "react";

import {
  LocalVideo,
  RemoteVideo,
  CallOptionItem,
  CallOptionItemText,
  CallSettings,
} from "../components/call-styles";

import { connect } from "react-redux";
import { updateCallStatus, updateRoomId } from "../flow/actions";

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
}) => {
  const [muteAudio, setMuteAudio] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
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
      remoteVideo.play();
    };

    peerConnection
      .createOffer()
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        socket.emit("offer", id, peerConnection.localDescription);
      });
  };

  const receiveCalleeAnswer = (id, msg) => {
    peerConnection.setRemoteDescription(msg);
  };

  const receiveCallerOffer = (id, msg) => {
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
      remoteVideo.play();
    };

    peerConnection
      .createAnswer()
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        socket.emit("answer", id, peerConnection.localDescription);
      });
  };

  const setCandidate = (id, candidate) => {
    console.log("setting candidate");
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
  };

  useEffect(() => {
    if (!roomId) {
      history.push("/create");
      return;
    }
    const localVideo = document.querySelector("#local-video");
    navigator.mediaDevices.getUserMedia(constraints).then((s) => {
      console.log("got stream");
      stream = s;
      localVideo.srcObject = stream;
      localVideo.play();
      localVideo.muted = true;
      console.log(stream);

      if (callStatus === "create") {
        console.log("creating call");
        socket.on("new user", (user) => {
          console.log("caller requesting", user.username, user.socketId);
          sendCalleeOffer(user.socketId);
        });
        socket.on("answer", (id, message) => {
          receiveCalleeAnswer(id, message);
        });
        socket.on("candidate", (id, candidate) => {
          setCandidate(id, candidate);
        });
      } else {
        console.log("receive call");
        socket.emit("callee ready");
        socket.on("offer", (id, message) => {
          console.log("receiving offer ", id, message);
          receiveCallerOffer(id, message);
        });
        socket.on("candidate", (id, candidate) => {
          setCandidate(id, candidate);
        });
        socket.on("room closed", () => {
          alert("The meeting host has disconnected");
          history.push("/dashboard");
        });
      }
    });

    return () => {
      endStream();
    };
  }, []);

  const endStream = () => {
    try {
      setCallStatus("join");
      stream.getTracks().forEach((track) => track.stop());
      console.log("unmounted");
      socket.emit("disconnectPeer");

      peerConnection.close();
    } catch {
      console.log("error");
    }
  };

  const handleAudioMute = (e) => {
    setMuteAudio(!muteAudio);
    const localVideo = document.querySelector("#local-video");
    localVideo.srcObject.getAudioTracks()[0].enabled = muteAudio;
  };

  const handleVideoMute = (e) => {
    setMuteVideo(!muteVideo);
    const localVideo = document.querySelector("#local-video");
    localVideo.srcObject.getVideoTracks()[0].enabled = muteVideo;
  };

  const handleEndCall = () => {
    history.push("/dashboard");
  };

  return (
    <div>
      <RemoteVideo autoplay id="remote-video"></RemoteVideo>
      <LocalVideo autoplay id="local-video" mute title="you"></LocalVideo>
      <CallSettings>
        <CallOptionItem onClick={handleVideoMute} title="stop video">
          <div
            className="fas fa-video fa-1x fa-fw"
            style={{ color: muteVideo ? "red" : "" }}
          />
        </CallOptionItem>

        <CallOptionItem title="Invite">
          <div className="fas fa-plus-circle fa-1x fa-fw" />
        </CallOptionItem>

        <CallOptionItem onClick={handleAudioMute} title="mute audio">
          <div
            className="fas fa-microphone fa-1x fa-fw"
            style={{ color: muteAudio ? "red" : "" }}
          />
        </CallOptionItem>

        <CallOptionItem title="participants">
          <div className="fas fa-users fa-1x fa-fw" />
        </CallOptionItem>

        <CallOptionItem onClick={handleEndCall} title="end call">
          <div className="fas fa-times fa-1x fa-fw" />
        </CallOptionItem>
      </CallSettings>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    callStatus: state.callStatus,
    roomId: state.roomId,
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
