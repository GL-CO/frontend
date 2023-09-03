import NavBar from "../Components/NavBar";
import styled from "styled-components";
const Container = styled.div`
  margin-left: 50px;
  background-color: #888;
  width: 70%;
  margin-top: 100px;
`;
const Tag = styled.div`
  align-items: center;
  width: 10%;
  background-color: #bbb;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 20px;
  /* margin-top: 50px; */
`;
const InputTitle = styled.input`
  display: block;
  margin-bottom: 50px;
  width: 50%;
  height: auto;
  margin: 20px;
`;
const InputText = styled.input`
  width: 50%;
  height: 300px;
  margin: 20px;
`;
export default function Write() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Tag>태그</Tag>
        <InputTitle></InputTitle>
        <InputText></InputText>
      </Container>
    </div>
  );
}
