const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@root123",
  database: "school_management",
});
app.use(cors({origin: "*"}))

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Define a route to handle database query
app.get("/", (req, res) => {
  const queryString = "SELECT * FROM students;";

  connection.query(queryString, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Send the results as JSON
    res.json(results);
  });
});

app.post("/api/teachers", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image_url,
      incharge,
      role,
      phone,
      address,
      branch,
      about,
    } = req.body;
    console.log(req.body);

    // Insert into database
    const query =
      "INSERT INTO teachers (name, email, password, image_url, incharge, role, phone, address, branch, about) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      name,
      email,
      password,
      image_url,
      incharge,
      role,
      phone,
      address,
      branch,
      about,
    ];

    const teacher = await connection.promise().query(query, values);


    res
      .status(201)
      .json({ success: true, message: "Teacher created successfully" });
  } catch (error) {
    console.error("Error creating teacher:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// // Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
