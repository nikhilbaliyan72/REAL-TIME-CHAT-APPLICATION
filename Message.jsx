import React from "react";

export default function Message({ sender, text }) {
  const isYou = sender === "You";
  return (
    <div className={`d-flex mb-2 ${isYou ? "justify-content-end" : "justify-content-start"}`}>
      <div
        className={`p-2 rounded ${
          isYou ? "bg-primary text-white" : "bg-secondary text-white"
        }`}
        style={{ maxWidth: "70%" }}
      >
        <small>{text}</small>
      </div>
    </div>
  );
}
