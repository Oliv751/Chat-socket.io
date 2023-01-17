import React from "react";
import { io } from "socket.io-client";
import ChatBar from "../pages/ChatBar";
import ChatBody from "../pages/ChatBody";
import ChatFooter from "../pages/ChatFooter";

const socket = io.connect("http://localhost:3000");

function ChatPage() {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody socket={socket} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
}

export default ChatPage;
