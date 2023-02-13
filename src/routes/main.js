const express = require("express");

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const User = require("../models/User");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "63e3c3e6124257bc719ba7b2" });

  const slides = await Slider.find();

  const cards = await Service.find();
  // to view this on the webpage we'll send it to the home view as an object
  res.render("home", {
    details: details,
    slides: slides,
    cards: cards,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "63e3c3e6124257bc719ba7b2" });

  // to view this on the webpage we'll send it to the home view as an object
  res.render("gallery", {
    details: details,
  });
});

// process contact form
routes.post("/process-contact-form", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newUser.save((err) => {
    if (!err) {
      console.log("User information added successfully");
      res.redirect("/");
    } else {
      console.log(err);
      res.redirect("/");
    }
  });
});

module.exports = routes;
