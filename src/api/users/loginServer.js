// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // /api/users/login 엔드포인트 처리
// app.post("/api/users/login", (req, res) => {
//   const { username } = req.body;

//   // 여기에서 원하는 로직을 수행하여 응답 데이터를 생성합니다
//   const responseData = { message: `환영합니다, ${username}님!` };

//   res.status(200).json(responseData);
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
// });

// async function signUpUser({ username }) {
//   const res = await fetch("http://localhost:8000/api/users/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username }),
//   });
//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.error);
//   }
//   const data = await res.json();
//   return data;
// }
// async function testSignUpUser() {
//   const userData = { username: "user0" };
//   try {
//     const res = await signUpUser(userData);
//     console.log("로그인성공", res);
//   } catch (error) {
//     console.error("로그인실패", error.message);
//   }
// }
