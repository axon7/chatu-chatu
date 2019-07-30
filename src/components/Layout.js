import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    background-color: grey;
    height: 100vh;
    margin: 0 auto;
    font-family: Helvetica, sans-serif;

  }
  *{ 
    box-sizing: border-box;
  }

`;

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <GlobalStyle whiteColor />

      {children}
    </div>
  );
};

export default Layout;
