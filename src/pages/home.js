import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Button from "../components/button";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  height: 85vh;
  align-items: center;
  background-color: #fff;
  text-align: center;
`;
// 282c34
const MainHeadingIcon = styled.span`
  color: ${({ theme }) => theme.primaryColor1};
  margin-right: 20px;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-family: cursive;
`;

const HomeText = styled.p`
  font-size: 1.5rem;
`;

const HomeButton = styled(Button)`
  padding: 0.8rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
`;

const Home = ({ history }) => {
  const handleGetStarted = () => {
    history.push("/dashboard");
  };
  return (
    <HomeContainer>
      <div>
        <MainHeading>
          <MainHeadingIcon className="fas fa-compact-disc fa-spin" />
          Lens
        </MainHeading>
        <HomeText>A video chat application</HomeText>
        <HomeButton onClick={handleGetStarted}>Get Started</HomeButton>
        <p style={{ marginTop: "50px" }}>
          <a href="/">Oluwakeye John</a>
        </p>
      </div>
    </HomeContainer>
  );
};

export default Home;
