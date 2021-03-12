const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const customer = require("./model/customerModel");
require("dotenv").config();

var cors = require("cors");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
mongoose
  .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("Connection success");
  })
  .catch((err) => {
    console.log("Connection rejected");
  });

app.post("/new-customer", (req, res) => {

  const newCustomer = new customer(req.body);

  newCustomer.save();

  res.status(200).json({veri:'okkkkkk'})
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log("port listening");
});