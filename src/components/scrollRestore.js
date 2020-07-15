import React, { useEffect } from "react";

const ScrollRestore = ({ children }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behaviour: "smooth",
    });
  });
  return <>{children}</>;
};

export default ScrollRestore;
