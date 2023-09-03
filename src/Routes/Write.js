import NavBar from "../Components/NavBar";
import styled from "styled-components";
const Container = styled.div`
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
export default function Write() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Tag>태그</Tag>
        <InputTitle></InputTitle>
        <InputText></InputText>
        <div>제출버튼추가미완</div>
      </Container>
    </div>
  );
}
