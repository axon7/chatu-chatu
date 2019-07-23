import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    background-color: grey;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
  }
  *{ 
    box-sizing: border-box;
  }

  h1{margin: 0;}
`;

const StyledH1 = styled.h1`
  height: 10vh;
  text-align: center;
  padding-top: 10px;
`;
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <GlobalStyle whiteColor />
      <StyledH1>Chatu-Chatu</StyledH1>
      {children}
    </div>
  );
};

export default Layout;
