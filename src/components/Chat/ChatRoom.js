import React from "react";
// import io from "socket.io-client";
import ChatTable from "./ChatTable";
// const socketURL = "localhost:3456";
// const socket = io(socketURL);
import { MdSend } from "react-icons/md";

import styled from "styled-components";
import Button from "../Button";

const StyledChatRoom = styled.div`
  display: flex;

  background-color: #439bf84f;
  height: 70vh;
  border-radius: 20px;
  width: 80vw;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;
`;

const InputForm = styled.form`
  width: 100%;
  height: 40px;
  margin: 0px auto 3% auto;
  display: flex;
  justify-content: space-between;
`;

const StyledInputField = styled.input`
  height: 100%;
  width: 90%;
  border: 0px solid;
  border-radius: 10px;
  padding-left: 2%;
  margin-left: 20px;
  outline: 0px;

  :focus {
    border: 2px solid #088774;
  }
`;
class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMsgs: [],
      newMsg: ""
    };
  }

  componentDidMount() {
    this.props.socket.on("chat", message => {
      this.setState({
        allMsgs: [...this.state.allMsgs, message]
      });
    });
  }

  handleMsgSubmit = e => {
    e.preventDefault();
    this.props.socket.emit("chat", {
      name: this.props.name,
      message: this.state.newMsg,
      timestamp: new Date().toISOString()
    });

    this.setState({ newMsg: "" });
  };

  render() {
    return (
      <StyledChatRoom>
        {/* <p>Your name: {this.props.name}</p> */}

        <ChatTable messages={this.state.allMsgs} />
        <InputForm onSubmit={this.handleMsgSubmit}>
          <StyledInputField
            type='text'
            value={this.state.newMsg}
            placeholder='Type your message'
            onChange={e => {
              this.setState({ newMsg: e.target.value });
            }}
          />
          <Button type='submit'>
            <MdSend style={{ color: "white" }} />
          </Button>
        </InputForm>
      </StyledChatRoom>
    );
  }
}

export default ChatRoom;
