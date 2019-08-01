import React from "react";
import uuid from "uuid";
import styled from "styled-components";

const StyledChatTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: scroll;
`;

const StyledUl = styled.ul`
  list-style: none;
  overflow: scroll;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;

const StyledMyMessage = styled.li`
  background-color: white;
  color: black;
  /* margin-right: 70vmin; */
  align-self: flex-end;
  display: flex;
  width: fit-content;
`;

const StyledSomeoneMessage = styled.li`
  color: red;
  background-color: white;
  /* margin-left: 70vmin; */
  display: flex;
  align-self: flex-start;
  width: fit-content;
`;
export default function ChatTable(props) {
  console.log(props);
  return (
    <StyledChatTable>
      <h5 style={{ alignSelf: "flex-start", marginLeft: "10vmin" }}>
        Global chat
      </h5>
      <StyledUl>
        {/* pass selected username here */}
        {props.messages.map(message => {
          return message.name === props.name ? (
            <StyledMyMessage key={uuid.v4()}>
              {message.name} : {message.message}
            </StyledMyMessage>
          ) : (
            <StyledSomeoneMessage key={uuid.v4()}>
              {message.name} : {message.message}
            </StyledSomeoneMessage>
          );
        })}
      </StyledUl>
    </StyledChatTable>
  );
}
