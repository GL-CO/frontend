import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import { GC2_URL } from "../Components/atoms";
import { useRecoilState } from "recoil";

function getTokenFromSessionStorage() {
  return sessionStorage.getItem("authToken");
}
//마이페이지
function MyPage() {
  const [userData, setUserData] = useState({
    username: "",
    nickname: "",
    email: "",
    points: "",
    usingLanguage: "",
    learningLanguage: "",
    profileImage: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const GC2 = useRecoilState(GC2_URL);

  useEffect(() => {
    const token = getTokenFromSessionStorage(); // 세션 스토리지에서 토큰을 가져옴
    if (token) {
      fetchUserData(token, setUserData);
    }
  }, [setUserData]); 

  // 사용자 정보 가져오는 함수
  const fetchUserData = async (token, setUserData) => {
    try {
      const response = await fetch(`${GC2[0]}:8080/v1/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        // 오류 처리
      }
    } catch (error) {
      console.log("error")
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // 여기에서 사용자 정보를 업데이트하는 로직 추가
    // 업데이트가 성공하면 setUserData를 사용하여 userData를 업데이트
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    // 프로필 이미지 업로드 처리 (이미지를 서버에 업로드하고 URL을 받아옴 등)
    // 예시: URL을 받아온 경우
    const imageURL = URL.createObjectURL(imageFile);
    setUserData({ ...userData, profileImage: imageURL });
  };

  return (
    <div>
      <NavBar></NavBar>
      <SeparatorLine />
      <Container>
        <ProfileContainer>
          <ProfileImageContainer>
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            )}
            <ProfileImage
              src={userData.profileImage || "기본 이미지 URL"}
              alt="프로필 이미지"
            />
          </ProfileImageContainer>
          <ProfileInfo>
            <InfoRow>
              <Label>이메일:</Label>
              <Info>{userData.email}</Info>
            </InfoRow>
            <InfoRow>
              <Label>별명:</Label>
              {isEditing ? (
                <input
                  type="text"
                  placeholder="별명"
                  value={newNickname}
                  onChange={(e) => setNewNickname(e.target.value)}
                />
              ) : (
                <Info>{userData.nickname}</Info>
              )}
            </InfoRow>
          </ProfileInfo>
        </ProfileContainer>
        <ButtonContainer>
          {isEditing ? (
            <SaveButton onClick={handleSaveClick}>저장</SaveButton>
          ) : (
            <EditButton onClick={handleEditClick}>편집</EditButton>
          )}
        </ButtonContainer>

        <SeparatorLine />
        <CircleContainer>
          <Circle>
            <p>
              <strong> 포인트 </strong>
            </p>
            <p>{userData.points}</p>
          </Circle>
          <Circle>
            <p>
              <strong> 구사 언어 </strong>
            </p>
            <p>{userData.usingLanguage}</p>
          </Circle>
          <Circle>
            <p>
              <strong> 학습 언어 </strong>
            </p>
            <p>{userData.learningLanguage}</p>
          </Circle>
        </CircleContainer>

        <SeparatorLine />

        <FriendContainer>
          <p> 친구 목록</p>
        </FriendContainer>

        <WrittenContainer>
          <p> 작성글 </p>
        </WrittenContainer>

        <EditingContainer>
          <p> 첨삭글 </p>
        </EditingContainer>
      </Container>
    </div>
  );
}

export default MyPage;

const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin-top: 20px;
`;

const Container = styled.div`
  padding: 20px;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

const ProfileImage = styled.img`
  max-width: 200px;
  height: auto;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const Info = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const EditButton = styled.button`
  background-color: #8f4646;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

const SaveButton = styled.button`
  background-color: #8f4646;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    margin: 5px 0;
  }
`;

const FriendContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 90%;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const WrittenContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 90%;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const EditingContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 90%;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;