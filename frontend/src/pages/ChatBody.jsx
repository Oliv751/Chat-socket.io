/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatBody({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messages", (messagesFromTheServer) => {
      setMessages(messagesFromTheServer);
    });
  }, []);

  const navigate = useNavigate();

  const handleLeaveChat = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Workshop socket.io</p>
        <button
          type="button"
          className="leaveChat__btn"
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      {/* message envoyé par vous */}
      <div className="message__container">
        {messages.map((message) => (
          <div key={message.content} className="message__chats">
            <p className="sender__name">You</p>
            <div className="message__sender">
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div>

        {/* message reçu par vous */}
        <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/* Quand je tape un message */}
        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
}

export default ChatBody;
