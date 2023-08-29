const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// /api/users/login 엔드포인트 처리
app.post("/api/users/login", (req, res) => {
  const { username } = req.body;

  // 여기에서 원하는 로직을 수행하여 응답 데이터를 생성합니다
  const responseData = { message: `환영합니다, ${username}님!` };

  res.status(200).json(responseData);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
