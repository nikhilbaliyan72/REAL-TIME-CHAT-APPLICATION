import React from "react";

export default function ChatList({ chats, onSelect }) {
  return (
    <div className="border-end bg-light" style={{ width: "25%" }}>
      <h4 className="p-3 border-bottom">Chats</h4>
      <ul className="list-group list-group-flush">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelect(chat)}
            style={{ cursor: "pointer" }}
          >
            <div className="fw-bold">{chat.name}</div>
            <small className="text-muted">{chat.lastMessage}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
