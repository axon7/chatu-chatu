import React from "react";
import uuid from "uuid";
import styled from "styled-components";

const StyledChatTable = styled.div`
  width: 100%;
  height: 100%;
`;
export default function ChatTable(props) {
  console.log(props);
  return (
    <StyledChatTable>
      <ul>
        {props.messages.map(message => (
          <li key={uuid.v4()}>
            {message.name} : {message.message}
          </li>
        ))}
      </ul>
    </StyledChatTable>
  );
}
