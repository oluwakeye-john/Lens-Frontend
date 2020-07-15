import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ minHeight: "81vh" }}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
