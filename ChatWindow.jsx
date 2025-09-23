import React, { useState } from "react";
import Message from "./Message";

export default function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: chat.name, text: chat.lastMessage },
    { id: 2, sender: "You", text: "Got it!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), sender: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* Header */}
      <div className="p-3 border-bottom bg-white fw-bold">{chat.name}</div>

      {/* Messages */}
      <div className="flex-grow-1 p-3 overflow-auto bg-light">
        {messages.map((m) => (
          <Message key={m.id} sender={m.sender} text={m.text} />
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-top bg-white d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
