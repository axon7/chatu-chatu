import React from "react";
import io from "socket.io-client";

import ChatName from "./ChatName";
import ChatRoom from "./ChatRoom";
const socketURL = "/";

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
      <div>
        {!this.state.name && (
          <ChatName handleSubmitName={this.handleSubmitName} />
        )}
        {this.state.name && <ChatRoom name={this.state.name} />}
      </div>
    );
  }
}

export default Chat;
