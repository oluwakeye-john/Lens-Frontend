import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 90vh;
  align-items: center;

  max-width: 750px;
  margin: 0 auto;
`;

const HomeItem = styled(Link)`
  text-align: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  text-decoration: none;
`;

const HomeItemImage = styled.div`
  background-color: #5555ff;
  padding: 1.5rem 2.5rem;
  border-radius: 25px;
  color: white;
`;

const HomeItemImage2 = styled(HomeItemImage)`
  background-color: #ff7700;
`;

const HomeItemText = styled.h4`
  margin-top: 10px;
  margin: 0;
  font-weight: 450;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeItem to="/create">
        <HomeItemImage>
          <span className="fas fa-video fa-2x" />
          <HomeItemText>New </HomeItemText>
        </HomeItemImage>
      </HomeItem>
      <HomeItem to="/join">
        <HomeItemImage2>
          <span className="fas fa-plus fa-2x" />
          <HomeItemText>Join</HomeItemText>
        </HomeItemImage2>
      </HomeItem>
    </HomeContainer>
  );
};

export default Home;
