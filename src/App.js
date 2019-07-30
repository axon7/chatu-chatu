import React, { Component } from "react";
import Chat from "./components/Chat/Chat";
import Layout from "./components/Layout";
export default class App extends Component {
  render() {
    return (
      <Layout>
        <Chat />
      </Layout>
    );
  }
}
