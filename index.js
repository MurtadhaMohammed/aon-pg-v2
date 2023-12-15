const express = require("express");
const app = express();
const students = require("./routers/students");
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", students);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
