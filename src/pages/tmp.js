import React, { useState } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  max-width: 70%;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  align-self: ${(props) => (props.sentByMe ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.sentByMe ? "#00c73c" : "#eee")};
  color: ${(props) => (props.sentByMe ? "#fff" : "#333")};
`;

const MessageInput = styled.input`
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
  outline: none;
`;

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sentByMe: true }]);
      setNewMessage("");
    }
  };

  return (
    <ChatContainer>
      <ChatMessages>
        {messages.map((message, index) => (
          <Message key={index} sentByMe={message.sentByMe}>
            {message.text}
          </Message>
        ))}
      </ChatMessages>
      <div>
        <MessageInput
          type="text"
          placeholder="메시지 입력..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </ChatContainer>
  );
};

export default ChatRoom;
