import NavBar from "../Components/NavBar";
import styled from "styled-components";
import React from "react";

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin: 0 auto;
`;

const TagContainer = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  console.log("1");
  return (
    <div>
      <NavBar></NavBar>
      <FormContainer>
        <h2>글쓰기</h2>
        <TagContainer>
          <Label htmlFor="selectBox"> 언어 선택 : </Label>
          <Tag id="selectBox">
            {options.map((option, i) => (
              <option key={i} value={option.value}></option>
            ))}
          </Tag>
        </TagContainer>
        <div>
          <select id="selectBox">
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <form>
          <FormGroup>
            <Label htmlFor="title">제목 :</Label>
            <Input
              id="title"
              type="text"
              placeholder="제목을 입력하세요"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="paragraph">내용 :</Label>
            <Textarea
              id="paragraph"
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
