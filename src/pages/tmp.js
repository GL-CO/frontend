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

const StyledForm = () => {
  return (
    <FormContainer>
      <form action="/join">
        <h1>Sign Up</h1>
        <Label>
          <Input type="email" placeholder="email" required />
        </Label>
      </form>
    </FormContainer>
  );
};

export default StyledForm;
