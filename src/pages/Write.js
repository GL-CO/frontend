import NavBar from "../Components/NavBar";
import styled from "styled-components";
import React, { useState } from "react";
import { useQueryClient } from "react-query";

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin: 0 auto;
`;
const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
  height: 100px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
`;
const Tag = styled.select``;
//글 쓰기
export default function Write() {
  const options = [
    { value: "", label: "선택 없음" },
    { value: "Korean", label: "한국어" },
    { value: "English", label: "영어" },
  ];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [languageTag, setLanguageTag] = useState("");
  const [writeData, setWriteData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const queryClient = useQueryClient();
  const GC2_URL = queryClient.getQueryData("GC2_URL");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleParagraphChange = (e) => {
    setContent(e.target.value);
  };
  const handleTagsChange = (e) => {
    setLanguageTag(e.target.value);
  };
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  const authToken = getTokenFromSessionStorage();
  const handleSubmit = (e) => {
    e.preventDefault();
    const writeData = {
      title: title,
      content: content,
      languageTag: languageTag,
    };
    console.log(writeData);
    onClickWrite(writeData);
  };

  const onClickWrite = (writeData) => {
    const URL = `${GC2_URL}:8080/v1/writing`;
    const authToken = getTokenFromSessionStorage();
    console.log(authToken);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': "Bearer " + `${authToken}`,
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(writeData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        console.log("data : ", data);
        setWriteData(data);
        setIsSuccess(!isSuccess);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <FormContainer>
        <h2>글쓰기</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="selectBox"> 언어 선택 : </Label>
            <Tag id="selectBox" onChange={handleTagsChange}>
              {options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Tag>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">제목 :</Label>
            <Input
              onChange={handleTitleChange}
              id="title"
              type="text"
              placeholder="제목을 입력하세요"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="content">내용 :</Label>
            <Textarea
              onChange={handleParagraphChange}
              id="content"
              type="text"
              placeholder="내용을 입력하세요"
            ></Textarea>
          </FormGroup>
          <Button>글쓰기</Button>
        </form>
      </FormContainer>
    </div>
  );
}
