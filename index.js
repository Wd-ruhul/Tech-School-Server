const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courseData = require("./data/course.json");


app.get("/", (req, res) => {
  res.send("Tech School Server Api Running!");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/course_details/:id", (req, res) => {
  console.log(req.params.id)
  const id = req.params.id;
  const selectedCourseData = courseData.find((n) => n._id === id);
  // console.log(selectedCourseData);
  res.send(selectedCourseData);
});

app.listen(port, () => {
  console.log(`News app listening on port ${port}`);
});
