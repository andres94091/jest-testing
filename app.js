const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const students = ["Elie", "Matt", "Joel", "Michael"];

const studentRoutes = require("./routes/students");
const usersRoutes = require("./routes/users");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use("/students", studentRoutes);
app.use("/users", usersRoutes);




app.get("/", (req, res) => {
  return res.json(students);
});

module.exports = app