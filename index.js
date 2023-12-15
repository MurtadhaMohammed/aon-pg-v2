const express = require("express");
const app = express();
const students = require("./routers/students");
const users = require("./routers/users");
const checkAuth = require("./middleware");

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.use("/api/v1/students", checkAuth, students);
app.use("/api/v1/users", users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
