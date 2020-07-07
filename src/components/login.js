import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, CardHeading } from "./card";
import { Input, InputBox, InputLabel } from "./input";
import { RightButton } from "./button";
import { TextMuted } from "./text";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Card>
        <form>
          <CardHeading>Login</CardHeading>
          <Input>
            <InputBox type="email" placeholder=" " required name="email" />
            <InputLabel>Email</InputLabel>
          </Input>
          <Input>
            <InputBox
              type="password"
              placeholder=" "
              required
              name="password"
            />
            <InputLabel>Password</InputLabel>
          </Input>
          <RightButton type="submit">Login</RightButton>
        </form>
        <Link to="/register">
          <TextMuted>Don't have an account? Sign Up</TextMuted>
        </Link>
      </Card>
    </LoginContainer>
  );
};

export default Login;
