import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 90vh;
  align-content: space-evenly;
  flex-wrap: wrap;

  max-width: 750px;
  margin: 0 auto;
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
  }

  &:hover span {
    transform: rotate(90deg);
  }
`;

const DashboardItemImage = styled.div`
  background-color: ${({ theme }) => theme.primaryColor1};
  padding: 1.5rem 2.5rem;
  border-radius: 25px;
  color: white;
  width: 140px;
`;

const DashboardItemImage2 = styled(DashboardItemImage)`
  background-color: ${({ theme }) => theme.primaryColor2};
`;

const DashboardItemText = styled.h4`
  margin-top: 10px;
  margin: 0;
  font-weight: 450;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardItem to="/create">
        <DashboardItemImage>
          <span className="fas fa-video fa-2x" />
          <DashboardItemText>New </DashboardItemText>
        </DashboardItemImage>
      </DashboardItem>
      <DashboardItem to="/join">
        <DashboardItemImage2>
          <span className="fas fa-plus fa-2x  " />
          <DashboardItemText>Join</DashboardItemText>
        </DashboardItemImage2>
      </DashboardItem>
      <DashboardItem to="/help">
        <DashboardItemImage>
          <span className="fas fa-question fa-2x  " />
          <DashboardItemText>Help</DashboardItemText>
        </DashboardItemImage>
      </DashboardItem>
    </DashboardContainer>
  );
};

export default Dashboard;
