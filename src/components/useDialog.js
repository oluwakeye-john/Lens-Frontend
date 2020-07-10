import React, { useState } from "react";

import { StyledDialogBox, StyledDialogContainer } from "./StyledDialog";

const DialogBox = ({ children, vis }) => {
  const [visible, setVisible] = useState(vis ? vis : false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  document.addEventListener("click", () => {
    if (visible === true) {
      setVisible(false);
    }
  });

  return (
    <StyledDialogContainer
      style={{ display: visible ? "block" : "none" }}
      onClick={handleToggle}
    >
      {children}
      <StyledDialogBox>{children}</StyledDialogBox>
    </StyledDialogContainer>
  );
};

export default DialogBox;
