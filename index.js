const express = require("express");
const mysql = require("mysql");
const PORT = 3333;
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12727537",
  password: "carQ2ZkzEk",
  database: "sql12727537",
});

db.connect((error) => {
  if (error) {
    console.log("error in connecting database", error);
  } else {
    console.log("connected to mysql database!");
  }
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

//endpoints

app.get('/', (req, res) => {
    res.send('Welcome to the School API!');
  });
  
app.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  require("./controllers/addSchool.controller").addSchool(
    { name, address, latitude, longitude },
    db,
    res
  );
});

app.get("/listSchools", (req, res) => {
  require("./controllers/listSchools.controller").listSchools(req, res, db);
});


