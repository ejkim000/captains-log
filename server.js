require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3030;

// DB CONNECTION
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Logs = require("./models/logs");

// VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // for the form submit

// INDEX
app.get("/", (req, res) => {
  res.send(`<h1>Captain's Log index page</h1>`);
});

// NEW
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// CREATE
app.post("/logs", async (req, res) => {

  req.body.shipIsBroken === "on"
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);

  await Logs.create(req.body);

  console.log(req.body);
  //res.redirect("/logs/show");
});

// LISTEN SERVER
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
