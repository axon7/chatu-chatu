import React from "react";
import io from "socket.io-client";
import ChatTable from "./ChatTable";
const socketURL = "/";
const socket = io(socketURL);
class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMsgs: [],
      newMsg: ""
    };
  }

  componentDidMount() {
    socket.on("chat", message => {
      this.setState({
        allMsgs: [...this.state.allMsgs, message]
      });
    });
  }

  handleMsgSubmit = e => {
    e.preventDefault();
    console.log("handle msg submit " + this.state.newMsg);
    socket.emit("chat", {
      name: this.props.name,
      message: this.state.newMsg,
      timestamp: new Date().toISOString()
    });

    this.setState({ newMsg: "" });
    console.log(this.state.allMsgs);
  };

  render() {
    return (
      <div>
        <h1>chatroom hello {this.props.name}</h1>{" "}
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
