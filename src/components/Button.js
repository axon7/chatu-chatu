import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 45px;
  height: 100%;
  border-radius: 20px;
  border: 0px solid;
  background-color: #088774;
  margin-right: 20px;
  margin-left: 4px;
  color: white;
`;
export default function Button({ children }) {
  return <StyledButton type='submit'>{children}</StyledButton>;
}
