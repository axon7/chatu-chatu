import React from "react";
import uuid from "uuid";
import styled from "styled-components";

const StyledChatTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.8em;
`;

const StyledUl = styled.ul`
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  padding-left: 30px;
`;

const StyledMyMessage = styled.li`
  background-color: white;
  color: black;
  /* margin-right: 70vmin; */
  align-self: flex-end;
  display: flex;
  width: fit-content;
  border-radius: 0.4em;
  max-width: 70%;
  margin: 6px 10px 0 0;
  padding: 5px;
`;

const StyledSomeoneMessage = styled.li`
  color: black;
  background-color: white;
  /* margin-left: 70vmin; */
  display: flex;
  align-self: flex-start;
  width: fit-content;
  border-radius: 0.4em;
  margin: 6px 10px 0 0;
  padding: 5px;
`;

const Bubble = styled.div`
  position: relative;
  background-color: white;

  :after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 1em solid transparent;
    border-left-color: white;
    border-right: 0;
    border-bottom: 0;
    margin-top: -0.5em;
    margin-right: -1em;
  }
`;

const BubbleBefore = styled.div`
  position: relative;
  background-color: white;

  :before {
    content: "";
    position: absolute;
    /* z-index: 1; */
    left: -33px;
    top: 50%;
    width: 0;
    height: 0;
    border: 1em solid transparent;
    border-right-color: white;
    /* border-left: 0; */
    border-bottom: 0;
    /* margin-left: -2em; */
    margin-top: -0.5em;
    margin-right: -1em;
  }
`;
export default function ChatTable(props) {
  console.log(props);
  return (
    <StyledChatTable>
      <StyledUl>
        {/* pass selected username here */}
        {props.messages.map(message => {
          return message.name === props.name ? (
            <StyledMyMessage key={uuid.v4()}>
              <Bubble>{message.message}</Bubble>
            </StyledMyMessage>
          ) : (
            <StyledSomeoneMessage key={uuid.v4()}>
              <BubbleBefore>{message.message}</BubbleBefore>
            </StyledSomeoneMessage>
          );
        })}
      </StyledUl>
    </StyledChatTable>
  );
}
