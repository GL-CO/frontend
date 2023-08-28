import NavBar from "../Components/NavBar";
import styled from "styled-components";
const bgImage = styled.div`
  width: 50%;
  height: 400px;
`;

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="배경이미지">
        <h2>Title</h2>
        <p>ff</p>
      </div>
      <div className="부가기능라인">
        <div className="태그창"></div>
        <div className="검색창"></div>
        <div className="검색아이콘"></div>
      </div>
      <div className="밑에네모박스">
        <div className="작은박스">
          <div className="프로필"></div>
          <div className="텍스트"></div>
        </div>
      </div>
    </div>
  );
}
