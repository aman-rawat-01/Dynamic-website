const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  class: String,
});

const Slider = mongoose.model("slider", sliderSchema);

module.exports = Slider;
