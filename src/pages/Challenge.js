import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const BoxList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
  padding: 50px;
  background-color: #f0f0f0;
  width: 120vh;
  margin: 50px;
  justify-content: space-between;
  align-items: center;
  ${({ blurred }) => blurred && "filter: blur(5px);"}
`;
const Box = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;
const Block = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
  display: ${({ covered }) => (covered ? "block" : "none")};
  z-index: 2; /* 다른 컨텐츠 위에 표시하기 위한 z-index 설정 */
`;
const Blur = styled``;
export default function Challenge() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  let [isShow, setIsShow] = useState(false);
  const [isCovered, setIsCovered] = useState(true);

  const toggleButton = () => {
    setIsShow(!isShow);
    setIsCovered(!isCovered);
  };
  const toggleCover = () => {
    setIsCovered(!isCovered);
  };

  return (
    <div>
      <NavBar></NavBar>
      <button onClick={toggleButton}>I'm button</button>
      <Container>
        <BoxList blurred={!isShow}>
          {data.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </BoxList>
        <Block covered={isCovered}>
          <div>Text aaaaaaaa</div>
          <button onClick={toggleButton}>I'm button</button>
        </Block>
      </Container>
    </div>
  );
}
