import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Bg1 from "../bg12.jpg";
import { Card, CardHeading } from "../components/card";

const HomeContainer = styled.div`
  margin-bottom: 5rem;
`;

const Service = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const HomeLanding = styled.div`
  height: 70vh;
  text-align: left;
  background-image: url(${Bg1});
  background-position: center;
  background-size: cover;
  color: black;
  text-shadow: 0 0 20px white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingBox = styled.div`
  padding: 2rem;
  text-align: center;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.primaryColor1};
`;

const MainHeadingText = styled.h5`
  font-size: 2rem;
`;

const HomeButton = styled(Button)`
  padding: 1rem 2.5rem;
  font-size: large;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
  align-content: space-evenly;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceCard = styled(Card)`
  width: 20%;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

const ServiceCardHeading = styled(CardHeading)`
  margin-top: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primaryColor1};
`;

const Home = ({ history }) => {
  return (
    <HomeContainer>
      <HomeLanding>
        <HeadingBox>
          <MainHeading>Lens</MainHeading>
          <MainHeadingText>A free video chat web app</MainHeadingText>
          <Link to="/dashboard">
            <HomeButton>Get Started</HomeButton>
          </Link>
        </HeadingBox>
      </HomeLanding>

      <Service>
        <h1>
          <span role="img" aria-label="service icon">
            🔭
          </span>
          Why Lens?
        </h1>
        <ServiceList>
          <ServiceCard>
            <ServiceCardHeading>Easy</ServiceCardHeading>
            <p>No sign-up/login required... </p>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardHeading>Safe</ServiceCardHeading>
            <p>We do NOT store your chats </p>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardHeading>Free</ServiceCardHeading>
            <p>All our services are FREE!</p>
          </ServiceCard>
        </ServiceList>
      </Service>
    </HomeContainer>
  );
};

export default Home;
