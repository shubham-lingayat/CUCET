// var mysql = require("mysql");
const mysql = require("mysql2");

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create Express app
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "Shubhamzz",
  password: "Shubham55@",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static("*"));

// Serve the index.html file when someone visits the root URL
app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

// Define route to handle form submission
app.post("/submit", (req, res) => {
  const { fullname, email, phone } = req.body;

  // Insert data into MySQL
  const sql = "INSERT INTO student (fullname, email, phone) VALUES (?, ?, ?);";
  db.query(sql, [fullname, email, phone], (err, result) => {
    if (err) {
      res.status(500).send("Error saving data to database");
      throw err;
    }
    res.status(200).send("Data saved successfully");
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
