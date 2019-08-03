import React from "react";
import io from "socket.io-client";
import styled from "styled-components";

import ChatName from "./ChatName";
import ChatRoom from "./ChatRoom";
const socketURL = "localhost:3456";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2d2d;
  height: 90%;
  color: white;
  flex-direction: column;
`;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      socket: null
    };
  }

  handleSubmitName = name => {
    this.setState({
      name: name
    });
  };

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketURL);

    socket.on("connect", () => {
      console.log("connected");
    });
    this.setState({ socket });
  };
  render() {
    return (
      <>
        <Wrapper>
          {!this.state.name && (
            <ChatName handleSubmitName={this.handleSubmitName} />
          )}
          {this.state.name && (
            <ChatRoom name={this.state.name} socket={this.state.socket} />
          )}
        </Wrapper>
      </>
    );
  }
}

export default Chat;
