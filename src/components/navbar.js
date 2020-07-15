import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #fff;
  box-shadow: 0 0 10px #e5e5e8;
  font-size: small;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

const NavbarHeader = styled.div`
  flex: 1;
  margin-left: 10px;
  vertical-align: middle;
  align-self: center;
  text-align: center;
`;

const NavbarHeaderText = styled.h1`
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-style: italic;
  font-family: ${({ theme }) => theme.labelFont};
`;

const NavbarLinks = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const NavbarItem = styled(NavLink)`
  display: inline-block;
  margin: 14px 3rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.primaryColor1};
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const items = [
  {
    name: "Dashboard",
    icon: "fas fa-compact-disc",
    link: "/dashboard",
  },
  {
    name: "New",
    icon: "fas fa-sign-out-alt",
    link: "/create",
  },
  {
    name: "Help",
    icon: "fas fa-question",
    link: "/help",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeader>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavbarHeaderText>Lens</NavbarHeaderText>
        </Link>
      </NavbarHeader>
      <NavbarLinks>
        {items.map((item, index) => (
          <NavbarItem
            exact={item.exact === "no" ? false : true}
            to={item.link}
            key={index}
            activeStyle={{ color: "#dc3545" }}
          >
            <div className={item.icon} />
            <div>{item.name}</div>
          </NavbarItem>
        ))}
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
// 529efe
