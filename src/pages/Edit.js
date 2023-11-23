import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

const ChatContainer = styled.div`
  width: 600px;
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
  overflow-y: scroll;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const CommentButton = styled.button`
  padding: 8px 16px;
  background-color: #8f4646;
  margin-top: 5px;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 8px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Comment = styled.div`
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 5px;
  &:hover {
    background-color: darkred;
  }
`;

export default function Edit() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [commentText, setCommentText] = useState("");
  const [activeMessageIndex, setActiveMessageIndex] = useState(null);
  const messageInputRef = useRef(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const posts = [
      {
        type: "공지",
        title: "서비스 업데이트 안내",
        content: "서비스가 업데이트 되었습니다. 새로운 기능을 확인해보세요!",
      },
    ];

    const messageData = posts.map((post) => ({
      text: `${post.type} - ${post.title}: ${post.content}`,
      sentByMe: false,
      comments: [],
    }));

    setMessages(messageData);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageData = { text: newMessage, sentByMe: true, comments: [] };
      setMessages([...messages, newMessageData]);
      setNewMessage("");
    }
  };

  const handleComment = (index) => {
    setActiveMessageIndex(index);
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const updatedMessages = [...messages];
      updatedMessages[activeMessageIndex].comments.push(commentText);
      setMessages(updatedMessages);
      setCommentText("");
      setActiveMessageIndex(null);
    }
  };

  const handleDeleteComment = (messageIndex, commentIndex) => {
    const updatedMessages = [...messages];
    updatedMessages[messageIndex].comments.splice(commentIndex, 1);
    setMessages(updatedMessages);
  };

  const handleCloseComment = () => {
    setActiveMessageIndex(null);
    setCommentText("");
  };

  return (
    <div>
      <NavBar />
      <ChatContainer>
        <ChatMessages ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <MessageContainer key={index} sentByMe={message.sentByMe}>
              <Message sentByMe={message.sentByMe}>{message.text}</Message>
              <CommentSection>
                {message.comments.map((comment, commentIndex) => (
                  <Comment key={commentIndex}>
                    {comment}
                    <DeleteButton
                      onClick={() => handleDeleteComment(index, commentIndex)}
                    >
                      삭제
                    </DeleteButton>
                  </Comment>
                ))}
                {activeMessageIndex === index && (
                  <CommentInputContainer>
                    <CommentInput
                      type="text"
                      placeholder="댓글 입력..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <CommentButton onClick={handleAddComment}>
                      댓글 추가
                    </CommentButton>
                    <CommentButton onClick={handleCloseComment}>
                      닫기
                    </CommentButton>
                  </CommentInputContainer>
                )}
                {!activeMessageIndex && (
                  <CommentButton onClick={() => handleComment(index)}>
                    댓글 달기
                  </CommentButton>
                )}
              </CommentSection>
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
          <CommentButton onClick={handleSendMessage}>전송</CommentButton>
        </div>
      </ChatContainer>
    </div>
  );
}
