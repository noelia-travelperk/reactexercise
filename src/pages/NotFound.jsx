import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const PageText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export default function NotFound() {
  return (
    <>
      <PageTitle>Page not found !</PageTitle>
      <PageText>Please go back to the home page</PageText>
    </>
  );
}
