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
const Tag = styled.div`
  text-align: center;
  width: 20%;
  background-color: #bbb;
  border-radius: 20px;
  margin-bottom: 10px;
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

export default function Write() {
  return (
    <div>
      <NavBar></NavBar>
      <FormContainer>
        <h2>글쓰기</h2>
        <Tag>태그</Tag>
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
