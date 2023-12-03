import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { GC2_URL } from "../Components/atoms";
// 박스 스타일
const ContentBox = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin: 0 auto;
`;

const TagSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
`;

const TitleHeading = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const ContentParagraph = styled.p`
  white-space: pre-line;
  font-size: 16px;
  line-height: 1.5;
`;

const AuthorParagraph = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  border: 1px solid #eee;
  padding: 5px;
  margin: 5px 0;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;
function Writing2() {
  const { writingId } = useParams();
  const [writingData, setWritingData] = useState({
    writingId: 0,
    userId: 0,
    nickname: "",
    title: "",
    content: "",
    languageTag: "",
    createdAt: "",
    updatedAt: "",
  });
  const GC2 = useRecoilState(GC2_URL);
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  console.log(writingId);
  const fetchWriting = () => {
    const URL = `${GC2[0]}:8080/v1/writing/${writingId}`;
    const authToken = getTokenFromSessionStorage();
    console.log(URL);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Writing response : ", data);
        setWritingData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchWriting();
    console.log("writingData :", writingData);
  }, []);

  //////////////////////////
  const [comments, setComments] = useState([]); //댓글리스트
  const [newComment, setNewComment] = useState(""); //댓글input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      fetchCommentWrite(newComment);
      setNewComment("");
    }
  };
  const fetchCommentRead = () => {
    const URL = `${GC2[0]}:8080/v1/correction`;
    const authToken = getTokenFromSessionStorage();
    console.log(URL);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("CommentRead Response : ", data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchCommentRead();
  }, []);
  const fetchCommentWrite = (comment) => {
    const URL = `${GC2[0]}:8080/v1/correction`;
    const authToken = getTokenFromSessionStorage();
    console.log(URL);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("CommentRead Response : ", data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <NavBar></NavBar>

      <AppContainer>
        <ContentBox>
          <p>Tag : {writingData.languageTag}</p>
          <p>작성자: {writingData.nickname}</p>
          <TitleHeading>{writingData.title}</TitleHeading>
          <ContentParagraph>{writingData.content}</ContentParagraph>
        </ContentBox>
        <CommentList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>{comment}</CommentItem>
          ))}
        </CommentList>
        <CommentForm onSubmit={handleSubmit}>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <CommentButton type="submit">댓글 달기</CommentButton>
        </CommentForm>
      </AppContainer>
    </div>
  );
}

export default Writing2;
