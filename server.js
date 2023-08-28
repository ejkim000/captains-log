require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3030;
const Logs = require("./models/logs");
const methodOverride = require("method-override");

// DB CONNECTION
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // for the form submit
app.use(methodOverride("_method")); // for other methods

// ROOT
app.get("/", (req, res) => {
  res.send(`<a href="/logs">go to index page</a>`);
});

//INDEX
app.get("/logs", async (req, res) =>{
    const allLogs = await Logs.find({});

    res.render("Index", {
        logs: allLogs
    })
})

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
  res.redirect("/logs");
});

// SHOW
app.get("/logs/:id", async (req, res) =>{
    const foundLog = await Logs.findById(req.params.id);
    res.render("Show", {
        log: foundLog,
    })

    console.log(foundLog);
})

// EDIT
app.get("/logs/:id/edit", async (req, res) => {
    const foundLog = await Logs.findById(req.params.id);
    res.render("Edit", {
        log: foundLog
    })
})

// DELETE
app.delete("/logs/:id", async (req, res) => {
    await Logs.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
})

// LISTEN SERVER
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
