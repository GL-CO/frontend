import NavBar from "../Components/NavBar";
import styled from "styled-components";
const Container = styled.div`
  /* display: flex; */
  width: 50%;
  margin: 0 auto;
  background-color: #888;
  padding: 20px;
  border-radius: 10px;
`;
const Tag = styled.div`
  text-align: center;
  width: 10%;
  background-color: #bbb;
  border-radius: 20px;
`;
const InputTitle = styled.input`
  width: 70%;
  margin: 20px;
  border-radius: 5px;
`;
const InputText = styled.input`
  width: 70%;
  height: 300px;
  margin: 20px;
  border-radius: 5px;
`;
const SendButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
  &:hover {
    background-color: red;
  }
`;
export default function Write() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Tag>태그</Tag>
        <InputTitle placeholder="제목을 입력하세요"></InputTitle>
        <InputText placeholder="내용을 입력하세요"></InputText>
        <SendButton>제출하기</SendButton>
      </Container>
    </div>
  );
}
