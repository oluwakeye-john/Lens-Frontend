import React, { useEffect } from "react";

const ScrollRestore = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <>{children}</>;
};

export default ScrollRestore;
