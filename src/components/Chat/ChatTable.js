import React from "react";
import uuid from "uuid";
import styled from "styled-components";

const StyledChatTable = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledMyMessage = styled.li`
  color: orange;
`;

const StyledMessage = styled.li`
  color: red;
`;
export default function ChatTable(props) {
  console.log(props);
  return (
    <StyledChatTable>
      <StyledUl>
        {/* pass selected username here */}
        {props.messages.map(message => {
          return message.name === "Kuba" ? (
            <StyledMyMessage key={uuid.v4()}>
              {message.name} : {message.message}
            </StyledMyMessage>
          ) : (
            <StyledMessage key={uuid.v4()}>
              {message.name} : {message.message}
            </StyledMessage>
          );
        })}
      </StyledUl>
    </StyledChatTable>
  );
}
