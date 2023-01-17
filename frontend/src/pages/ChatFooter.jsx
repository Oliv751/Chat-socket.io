/* eslint-disable react/prop-types */
import React, { useState } from "react";

function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    socket.emit("newMessage", { content: message });

    setMessage("");
  };

  return (
    <div className="chat__footer">
      <div className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" className="sendBtn" onClick={handleSendMessage}>
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
