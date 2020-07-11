import styled from "styled-components";

export const ToolTip = styled.div`
  &:hover span {
    opacity: 1;
  }
`;

export const ToolTipRelative = styled(ToolTip)`
  position: relative;
`;

export const ToolTipText = styled.span`
  position: absolute;
  bottom: 110%;
  right: 0;
  opacity: 0;
  background-color: #121212;
  border: 1px solid #ccc;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  transition: 0.5s;
  pointer-events: none;
`;

export const ToolTipTextRelative = styled(ToolTipText)``;
