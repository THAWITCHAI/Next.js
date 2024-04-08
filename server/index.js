const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");
const mysql = require("mysql");
const port = 3520;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "system_students",
});

app.use(cors());
app.use(bodyParser.json());
app.get("/api", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/creact", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const password = req.body.password;
  if (name != "" && password != "") {
    db.query(
      "INSERT INTO students (id,name, password) VALUES (?,?,?)",
      [id,name, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  }
});
app.listen(port, () => console.log(`http://localhost:${port}!`));
