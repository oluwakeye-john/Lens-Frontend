import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../components/card";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 90vh;
  align-content: space-evenly;
  flex-wrap: wrap;

  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const DashboardItem = styled(Link)`
  text-align: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  text-decoration: none;

  span {
    transition: 0.3s;
    opacity: 0.9;
  }

  &:hover span {
    transform: rotate(90deg);
  }
`;

const DashboardItemBox = styled(Card)`
  text-align: center;
  width: 18rem;
`;

const DashboardItemImage = styled.div`
  color: ${({ theme }) => theme.primaryColor1};
`;

const DashboardItemText = styled.p`
  margin-top: 10px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardItem to="/create">
        <DashboardItemBox>
          <DashboardItemImage className="fas fa-video fa-3x" />
          <DashboardItemText>Host a new call </DashboardItemText>
        </DashboardItemBox>
      </DashboardItem>
      <DashboardItem to="/join">
        <DashboardItemBox>
          <DashboardItemImage className="fas fa-plus fa-3x  " />
          <DashboardItemText>Join a call</DashboardItemText>
        </DashboardItemBox>
      </DashboardItem>
      <DashboardItem to="/help">
        <DashboardItemBox>
          <DashboardItemImage className="fas fa-question fa-3x  " />
          <DashboardItemText>Get Help</DashboardItemText>
        </DashboardItemBox>
      </DashboardItem>
    </DashboardContainer>
  );
};

export default Dashboard;
