const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  linkLabel: String,
  linkUrl: String,
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
