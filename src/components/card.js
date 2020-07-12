import styled from "styled-components";

export const Card = styled.div`
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: left;
  width: 24rem;
  background-color: white;

  @media (max-width: 500px) {
    box-shadow: 0;
  }

  @media (min-width: 500px) {
    box-shadow: 0 0 10px #a0a0a0;
  }
`;

export const CardHeading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-family: arial;
`;
