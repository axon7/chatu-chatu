import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
const StyledChatName = styled.div`
  display: flex;

  background-color: #439bf84f;
  height: 15vh;
  border-radius: 20px;
  width: 80vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputForm = styled.form`
  width: 80%;
  height: 20%;
  margin: 10px auto auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInputName = styled.input`
  height: 100%;
  width: 80%;
  border: 0px solid;
  border-radius: 10px;
  padding: 2%;
  outline: 0px;

  :focus {
    border: none;
  }
`;

export default function ChatName(props) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmitName(name);
  };

  return (
    <StyledChatName>
      <h1>What's your name?</h1>
      <InputForm onSubmit={handleSubmit}>
        <StyledInputName
          type='text'
          value={name}
          placeholder='Your username'
          onChange={e => setName(e.target.value)}
        />
        <Button>Join</Button>
      </InputForm>
    </StyledChatName>
  );
}
