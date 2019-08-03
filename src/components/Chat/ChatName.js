import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
const StyledChatName = styled.div`
  display: flex;

  background-color: #439bf84f;
  height: 30%;
  min-height: 180px;
  max-height: 180px;
  max-width: 610px;
  border-radius: 20px;
  width: 80vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const InputForm = styled.form`
  width: 80%;
  height: 40%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 35px;
`;

const StyledInputName = styled.input`
  height: 100%;
  width: 80%;
  border: 0px solid;
  border-radius: 10px;
  padding-left: 15px;
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
      <h2 style={{ marginTop: "0px" }}>What's your name?</h2>
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
