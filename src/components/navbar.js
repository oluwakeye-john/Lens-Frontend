import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavbarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  background-color: #e4e4ed;
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
  transition: 0.2s;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.primaryColor1};
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const signedInItems = [
  {
    name: "Home",
    icon: "fas fa-home",
    link: "/",
  },
  {
    name: "Dashboard",
    icon: "fas fa-clock",
    link: "/dashboard",
  },
  {
    name: "Meetings",
    icon: "fas fa-address-card",
    link: "/meetings",
  },
];

const signedOutItems = [
  {
    name: "Home",
    icon: "fas fa-home",
    link: "/",
  },
  {
    name: "User Guide",
    icon: "fas fa-sign-in-alt",
    link: "/login",
  },
  {
    name: "Sign In",
    icon: "fas fa-sign-out-alt",
    link: "/login",
  },
];

const Navbar = ({ user, isLoggedIn }) => {
  console.log(window.location.pathname);
  const items = isLoggedIn ? signedInItems : signedOutItems;
  return (
    <NavbarContainer>
      <>
        {items.map((item, index) => (
          <NavbarItem
            to={item.link}
            key={index}
            activeStyle={{ color: "#529efe" }}
          >
            <div className={item.icon} />
            <div>{item.name}</div>
          </NavbarItem>
        ))}
      </>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navbar);
