require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const User = require("./models/User");

const app = express();

// to use body parser
app.use(bodyParser.urlencoded({ extended: true }));

//to use static files in public directory
app.use("/static", express.static("public"));

//use routes
app.use("", routes);

// set template engine
app.set("view engine", "hbs");
app.set("views", "views");

// setting partials
//partials are similar to components in react js
hbs.registerPartials("views/partials");

//to handle mongoose deprecation warning
mongoose.set("strictQuery", false);

//connecting to mongo db
const user = process.env.DB_USER;
const password = process.env.DB_PWD;
mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.jqx9xwl.mongodb.net/websiteDB?retryWrites=true&w=majority`,
  (err) => {
    if (!err) console.log("DB connected");
    else console.log("error:" + err);
    //   Detail.create({
    //     brandName: "Kaze",
    //     brandIconUrl:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4Rfprwyine2a8SK437EZBwixVhCJGpJ6mA&usqp=CAU",
    //     links: [
    //       {
    //         label: "Home",
    //         url: "/",
    //       },
    //       {
    //         label: "Services",
    //         url: "/services",
    //       },
    //       {
    //         label: "Gallery",
    //         url: "/gallery",
    //       },
    //       {
    //         label: "About",
    //         url: "/about",
    //       },
    //       {
    //         label: "Contact Us",
    //         url: "/contact-us",
    //       },
    //     ],
    //   });

    //   Slider.create([
    //     {
    //       title: "Mt. Fuji",
    //       description: "Fuji san sugoi desune.",
    //       imageUrl:
    //         "https://www.tripsavvy.com/thmb/qFqPcg6Wo24Hu4fLokNfAZdC-xQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg",
    //     },
    //   ]);

    //   Service.create([
    //     {
    //       icon: "fa-brands fa-accusoft",
    //       title: "Best Japanese courses",
    //       description:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas officia dicta tenetur necessitatibus praesentium sint",
    //       linkLabel: "Check",
    //       linkUrl: "https://www.japanesepod101.com/",
    //     },
    //   ]);
  }
);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
