import React from "react";
import MessageBoard from "../components/Chat/MessageBoard";
import io from "socket.io-client";
const socketURL = "http://localhost:3456";
class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null
    };
  }

  componentWillMount() {
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
      <div className='Layout'>
        <h1>Welcome to Chatu-Chatu!</h1>
        <MessageBoard />
      </div>
    );
  }
}
export default Layout;
