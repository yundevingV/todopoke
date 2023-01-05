const express = require("express");
const cors = require('cors');

const app = express();
const mysql = require("mysql");
const PORT =  process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qwer123456@",
  database: "ys",
});

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions))

app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");

    console.log('a')
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
 })

