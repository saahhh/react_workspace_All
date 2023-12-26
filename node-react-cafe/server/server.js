const express = require("express");
const oracledb = require("oracledb");

const app = express();
const PORT = 5100;

const cors = require("cors");

app.use(cors());

const dbConfig = {
  user: "khbbb",
  password: "kh1234",
  connectString: "localhost:1521/XE",
};

app.use(express.json());

async function runQuery(sql, binds = [], options = {}) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(sql, binds, options);
    return result.rows.map((row) => ({
      ID: row[0],
      NAME: row[1],
      PRICE: row[2],
    }));
  } catch (error) {
    console.error(err);
  }
}

app.get("/", (request, response) => {
  response.send("백엔드 연결 성공~");
});

app.get("/api/cafe", async (request, response) => {
  const cafes = await runQuery("SELECT * FROM cafe");
  response.json(cafes);
});

app.listen(PORT, () => {
  console.log(`서버 시작 : http://localhost:${PORT}`);
});
