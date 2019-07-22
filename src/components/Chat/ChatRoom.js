import React from "react";
// import io from "socket.io-client";
import ChatTable from "./ChatTable";
// const socketURL = "localhost:3456";
// const socket = io(socketURL);
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
      <div>
        <h1>Chatu-Chatu</h1> <p>Your name: {this.props.name}</p>
        <form onSubmit={this.handleMsgSubmit}>
          <input
            type='text'
            value={this.state.newMsg}
            placeholder='Type here'
            onChange={e => {
              this.setState({ newMsg: e.target.value });
            }}
          />
          <button type='submit'>Send</button>
        </form>
        <ChatTable messages={this.state.allMsgs} />
      </div>
    );
  }
}

export default ChatRoom;
