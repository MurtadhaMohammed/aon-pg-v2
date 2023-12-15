const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_CONNECTION,
});

client
  .connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error", e));

async function getStudents(req, res) {
  const result = await client.query(`SELECT * FROM students`);
  res.send(result.rows);
}

async function addStudent(req, res) {
  let { name, stage } = req.body;
  const result = await client.query(`INSERT INTO students (name, stage)
  VALUES ('${name}', '${stage}') RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getStudents,
  addStudent,
};

// getStudents();
// addStudent("Noor", "3th")
