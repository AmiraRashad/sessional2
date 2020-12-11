var express = require("express");
var router = express.Router();
var Course = require("../../models/course");
router.get("/", async (req, res) => {
  var courses = await Course.find();
  console.log("here");
  res.render("courses/index", { courses });
});

router.get("/add", async (req, res) => {
  console.log("hereee");
  res.render("courses/add");
});

router.get("/edit/:id", async (req, res) => {
  var course = await Course.findById(req.params.id);
  res.render("courses/edit", { course });
});

router.post("/edit/:id", async (req, res) => {
  var course = await Course.findById(req.params.id);
  course.course_name = req.body.name;
  course.course_id = req.body.course_id;
  course.course_duration = req.body.duration;
  course.course_fee = req.body.fee;
  await course.save();
  res.redirect("/");
});

router.post("/", async (req, res) => {
  var course = new Course();
  course.course_name = req.body.name;
  course.course_id = req.body.course_id;
  course.course_duration = req.body.duration;
  course.course_fee = req.body.fee;
  await course.save();
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
