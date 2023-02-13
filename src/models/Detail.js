const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  brandName: String,
  brandIconUrl: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});

const Detail = mongoose.model("details", detailSchema);

module.exports = Detail;
