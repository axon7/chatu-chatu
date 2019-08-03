import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: #2e2d2d;
    
    margin: 0 auto;
    font-family: Helvetica, sans-serif;

  }
  *{ 
    box-sizing: border-box;
  }

`;

const StyledH1 = styled.h1`
  height: 25px;

  text-align: center;
  width: 100%;
`;

const StyledLayout = styled.div`
  height: 89vh;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <StyledH1>Chatu-Chatu</StyledH1>

      {children}
    </StyledLayout>
  );
};

export default Layout;
