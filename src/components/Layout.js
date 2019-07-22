import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: orange;
    background-color: grey;
  }
`;
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <GlobalStyle whiteColor />
      <h1>Chatu-Chatu</h1>
      {children}
    </div>
  );
};

export default Layout;
