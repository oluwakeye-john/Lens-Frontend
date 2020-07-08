import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import { RightButton } from "../components/button";
import { TextMuted, ErrorMessage } from "../components/text";

import { updateUser } from "../flow/actions";
import { connect } from "react-redux";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Login = ({ history, updateUser, user }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    console.log(name.value, email.value);
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
          setErrorMessage(resp.data);
        } else {
          setErrorMessage("");
          updateUser(resp.data);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginContainer>
      <Card>
        <form onSubmit={handleLogin}>
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
          {/* //for server side error logging */}
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <RightButton type="submit">Login</RightButton>
        </form>
        <Link to="/register">
          <TextMuted>Don't have an account? Sign Up</TextMuted>
        </Link>
      </Card>
    </LoginContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (value) => dispatch(updateUser(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
