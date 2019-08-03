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
  height: 100%;
  border-radius: 20px;
  width: 80vw;
  max-width: 900px;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;
`;

const InputForm = styled.form`
  width: 80%;
  height: 40px;
  margin: 0px auto 10px auto;
  display: flex;
  justify-content: center;
`;

const StyledInputField = styled.input`
  height: 100%;
  width: 80%;
  border: 0px solid;
  border-radius: 10px;
  padding-left: 15px;
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
      newMsg: "",
      name: ""
    };
  }

  componentDidMount() {
    this.props.socket.on("chat", message => {
      this.setState({
        allMsgs: [...this.state.allMsgs, message],
        name: this.props.name
      });
    });
  }

  handleMsgSubmit = e => {
    e.preventDefault();
    if (this.state.newMsg !== "") {
      this.props.socket.emit("chat", {
        name: this.props.name,
        message: this.state.newMsg,
        timestamp: new Date().toISOString()
      });
    } else {
      return null;
    }

    this.setState({ newMsg: "" });
  };

  render() {
    return (
      <StyledChatRoom>
        {/* <p>Your name: {this.props.name}</p> */}

        <ChatTable messages={this.state.allMsgs} name={this.props.name} />
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
