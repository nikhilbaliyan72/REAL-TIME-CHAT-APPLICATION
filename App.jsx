import React, { useState } from "react";

export default function App() {
  const friendsList = ["Alice", "Bob", "Charlie"];
  const [activeFriend, setActiveFriend] = useState(friendsList[0]);

  // Store messages per friend
  const [messages, setMessages] = useState({
    Alice: [
      { sender: "Alice", text: "Hey! How are you?" },
      { sender: "You", text: "I'm good! What about you?" },
    ],
    Bob: [],
    Charlie: [],
  });

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "You", text: input };
    setMessages((prev) => ({
      ...prev,
      [activeFriend]: [...prev[activeFriend], newMessage],
    }));
    setInput("");

    // Simulated friend reply
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [activeFriend]: [
          ...prev[activeFriend],
          { sender: activeFriend, text: "Got it! 😃" },
        ],
      }));
    }, 1500);
  };

  return (
    <div className="container py-4 vh-100 d-flex flex-column">
      <h2 className="text-center mb-4 text-primary">
        <i className="bi bi-chat-dots"></i> Chat with Friends
      </h2>

      {/* Friends selector */}
      <div className="mb-3 d-flex justify-content-center">
        {friendsList.map((friend) => (
          <button
            key={friend}
            className={`btn me-2 ${
              activeFriend === friend ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveFriend(friend)}
          >
            {friend}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div
        className="flex-grow-1 border rounded p-3 mb-3 bg-light overflow-auto"
        style={{ minHeight: "400px" }}
      >
        {messages[activeFriend].length === 0 ? (
          <div className="text-muted text-center mt-5">
            No messages yet. Start chatting with {activeFriend}!
          </div>
        ) : (
          messages[activeFriend].map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-2 ${
                msg.sender === "You" ? "justify-content-end" : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "You"
                    ? "bg-primary text-white"
                    : "bg-secondary text-white"
                }`}
                style={{ maxWidth: "70%" }}
              >
                <strong>{msg.sender}: </strong>
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Box */}
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          value={input}
          placeholder={`Message ${activeFriend}...`}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          <i className="bi bi-send"></i>
        </button>
      </div>
    </div>
  );
}
