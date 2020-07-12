import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Bg1 from "../bg1.jpg";

const HomeContainer = styled.div`
  height: 70vh;
  text-align: left;
  background-image: url(${Bg1});
  background-position: center;
  background-size: cover;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingBox = styled.div`
  padding: 2rem;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
`;

const MainHeadingText = styled.h5`
  margin: 0;
  font-size: 2rem;
`;

const HomeButton = styled(Button)``;

const Home = ({ history }) => {
  const handleGetStarted = () => {
    history.push("/dashboard");
  };
  return (
    <HomeContainer>
      <HeadingBox>
        <MainHeading>Hello world</MainHeading>
        <MainHeadingText>I'm Jarvis</MainHeadingText>
        <HomeButton>Get Started</HomeButton>
      </HeadingBox>
    </HomeContainer>
  );
};

export default Home;
