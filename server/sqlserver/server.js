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
app.use(cors({ origin: "*" }));

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
app.post("/api/create-class", async (req, res) => {
  try {
    const {
      class_name,
      class_section,
      english,
      hindi,
      math,
      physics,
      chemistry,
      punjabi,
      computer,
      drawing,
    } = req.body;
    // console.log(req.body);

    // Insert into database
    const query =
      "INSERT INTO classes (   class_name, section, english, hindi, math, physics, chemistry, punjabi, computer, drawing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      class_name,
      class_section,
      english,
      hindi,
      math,
      physics,
      chemistry,
      punjabi,
      computer,
      drawing,
    ];

    await connection.promise().query(query, values);

    res
      .status(201)
      .json({ success: true, message: "Class is created successfully" });
  } catch (error) {
    console.error("Error creating teacher:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/bio-data", async (req, res) => {
  try {
    const studentData = req.body;
    console.log(studentData);
    // Define the columns to insert
    const columns = Object.keys(studentData).join(", ");

    // Generate the placeholders for values (?, ?, ?, ...)
    const valuesPlaceholders = Array(Object.keys(studentData).length)
      .fill("?")
      .join(", ");

    // Insert into database
    const query = `INSERT INTO bio_data (${columns}) VALUES (${valuesPlaceholders})`;

    const values = Object.values(studentData);

    await connection.promise().query(query, values);

    res.status(201).json({
      success: true,
      message: "Student bio-data created successfully",
    });
  } catch (error) {
    console.error("Error creating student bio-data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/subject-info", async (req, res) => {
  try {
    const {
      class_name,
      section,
      subject,
      adm_no,
      pen_paper_term1_pt1,
      pen_paper_term1_pt2,
      pen_paper_term1_pt3,
      multiple_assessment_term1_pt1,
      multiple_assessment_term1_pt2,
      multiple_assessment_term1_pt3,
      best_of_two_term1,
      weightage_term1,
      portfoilo_term1,
      sub_enrich_act_term1,
      hly_exam_term1,
      total_marks_term_1,
      final_grade_term_1,

      pen_paper_term2_pt1,
      pen_paper_term2_pt2,
      pen_paper_term2_pt3,
      multiple_assessment_term2_pt1,
      multiple_assessment_term2_pt2,
      multiple_assessment_term2_pt3,
      best_of_two_term2,
      weightage_term2,
      portfoilo_term2,
      sub_enrich_act_term2,
      total_marks_term_2,
      final_grade_term_2,
      annual_exam,
    } = req.body;

    const tableName = `${class_name}_${section}_${subject}`;

    // Check if the table exists, if not, create it
    const checkTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
      adm_no VARCHAR(255),
      t1pt1p&p VARCHAR(255),
      t1pt1ma VARCHAR(255),
      t1pt2p&p VARCHAR(255),
      t1pt2ma VARCHAR(255),
      t1pt3p&p VARCHAR(255),
      t1pt3ma VARCHAR(255),
      t1bestof2 VARCHAR(255),
      t1weightage VARCHAR(255),
      t1portfolio VARCHAR(255),
      t1subact VARCHAR(255),
      t1hlyexam VARCHAR(255),
      t1totalmarks VARCHAR(255)
      t1finalgrade VARCHAR(255)
      t2pt1p&p VARCHAR(255),
      t2pt1ma VARCHAR(255),
      t2pt2p&p VARCHAR(255),
      t2pt2ma VARCHAR(255),
      t2pt3p&p VARCHAR(255),
      t2pt3ma VARCHAR(255),
      t2bestof2 VARCHAR(255),
      t2weightage VARCHAR(255),
      t2portfolio VARCHAR(255),
      t2subact VARCHAR(255),
      annual_exam VARCHAR(255)
      t2totalmarks VARCHAR(255)
      t2finalgrade VARCHAR(255)
    )`;

    await connection.promise().query(checkTableQuery);

    // Insert into the dynamically created table
    const insertQuery = `INSERT INTO ${tableName} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      class_name,
      section,
      subject,
      adm_no,
      pen_paper_term1_pt1,
      pen_paper_term1_pt2,
      pen_paper_term1_pt3,
      multiple_assessment_term1_pt1,
      multiple_assessment_term1_pt2,
      multiple_assessment_term1_pt3,
      best_of_two_term1,
      weightage_term1,
      portfoilo_term1,
      sub_enrich_act_term1,
      hly_exam_term1,
      total_marks_term_1,
      final_grade_term_1,
      pen_paper_term2_pt1,
      pen_paper_term2_pt2,
      pen_paper_term2_pt3,
      multiple_assessment_term2_pt1,
      multiple_assessment_term2_pt2,
      multiple_assessment_term2_pt3,
      best_of_two_term2,
      weightage_term2,
      portfoilo_term2,
      sub_enrich_act_term2,
      annual_exam,
      total_marks_term_2,
      final_grade_term_2,
    ];

    await connection.promise().query(insertQuery, values);

    res
      .status(201)
      .json({ success: true, message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// // Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
