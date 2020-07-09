import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, CardHeading } from "../components/card";
import { Input, InputBox, InputLabel } from "../components/input";
import { RightButton } from "../components/button";
import { TextMuted, ErrorMessage } from "../components/text";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Register = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    console.log(name.value, email.value);
    fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
          setErrorMessage(resp.msg);
        } else {
          setErrorMessage("");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <RegisterContainer>
      <Card>
        <form onSubmit={handleRegister}>
          <CardHeading>Register</CardHeading>
          <Input>
            <InputBox type="text" placeholder=" " required name="name" />
            <InputLabel>Full Name</InputLabel>
          </Input>
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
              minLength="8"
            />
            <InputLabel>Password</InputLabel>
          </Input>
          {/* //for server side error logging */}
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <RightButton type="submit">Register</RightButton>
        </form>
        <Link to="/login">
          <TextMuted>Already have an account? Login</TextMuted>
        </Link>
      </Card>
    </RegisterContainer>
  );
};

export default Register;
