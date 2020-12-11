var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
  course_name: String,
  course_id: Number,
  course_duration: Number,
  course_fee: Number,
});

var courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;
