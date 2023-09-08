import React, { useState } from "react";
import styled from "styled-components";

// styled-components를 사용하여 컴포넌트 스타일링
const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
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
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const StyledForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("입력된 데이터:", formData);
  };
  return (
    <FormContainer>
      <Title>문의하기</Title>
      <form>
        <FormGroup>
          <Label htmlFor="name">이름:</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">이메일:</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">메시지:</Label>
          <Textarea id="message" name="message" />
        </FormGroup>
        <Button type="submit">전송</Button>
      </form>
    </FormContainer>
  );
};

export default StyledForm;
