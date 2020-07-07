import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  background-color: #eee;
  font-size: small;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const NavbarItem = styled(NavLink)`
  display: inline-block;
  margin: 10px 3rem;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: 0.2s;

  &:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const items = [
  {
    name: "Home",
    icon: "fas fa-home",
    link: "/",
  },
  {
    name: "Chat",
    icon: "fas fa-envelope",
    link: "/chat",
  },
  {
    name: "Meetings",
    icon: "fas fa-trash",
    link: "/",
  },
  {
    name: "Contacts",
    icon: "fas fa-user",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      {items.map((item, index) => (
        <NavbarItem to={item.link} key={index}>
          <div className={item.icon} />
          <div>{item.name}</div>
        </NavbarItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
