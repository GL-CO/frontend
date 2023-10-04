import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
const ChatContainer = styled.div`
  width: 600px;
  height: 400px; /* 높이를 고정할 수 있도록 설정 */
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
  overflow-y: scroll; /* 스크롤을 활성화 */
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sentByMe ? "flex-end" : "flex-start")};
`;

const Message = styled.div`
  max-width: 70%;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background-color: ${(props) => (props.sentByMe ? "#007bff" : "#eee")};
  color: ${(props) => (props.sentByMe ? "#fff" : "#333")};
`;

const MessageInput = styled.input`
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
  outline: none;
  width: 100%;
`;

export default function Edit() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageInputRef = useRef(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const posts = [
      {
        type: "공지",
        title: "서비스 업데이트 안내",
        content: "서비스가 업데이트 되었습니다. 새로운 기능을 확인해보세요!",
      },
      {
        type: "소식",
        title: "이벤트 안내",
        content: "이번 주말에 특별 이벤트가 진행됩니다. 참여하세요!",
      },
      {
        type: "일반",
        title: "질문이 있어요",
        content: "앱 사용 관련 질문이 있습니다. 도와주세요.",
      },
    ];

    const messageData = posts.map((post) => ({
      text: `${post.type} - ${post.title}: ${post.content}`,
      sentByMe: false,
    }));

    setMessages(messageData);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageData = { text: newMessage, sentByMe: true };
      setMessages([...messages, newMessageData]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    // 메시지가 업데이트될 때 스크롤을 맨 아래로 이동
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div>
      <NavBar></NavBar>
      <ChatContainer>
        <ChatMessages ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <MessageContainer key={index} sentByMe={message.sentByMe}>
              <Message sentByMe={message.sentByMe}>{message.text}</Message>
            </MessageContainer>
          ))}
          <div ref={messageInputRef}></div>
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
    </div>
  );
}
