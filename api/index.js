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
    useFindAndModify: false 
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

  res.status(200).json({ veri: "okkkkkk" });
});

app.get("/get-customers", async (req, res) => {
  let dbCustomers = await customer.find({});

  res.status(200).json({ customers: { ...dbCustomers } });
});

app.post("/get-customer-by-id", async (req, res) => {
  let currentCustomer = await customer.findOne({ _id: req.body.id }).exec();
  res.status(200).json({ currentCustomer });
});

app.post("/delete-customer-by-id", async (req, res) => {
  await customer.findOneAndDelete({ _id: req.body.id }).exec();
  let dbCustomers = await customer.find({});

  res.status(200).json({ customers: { ...dbCustomers } });
});

app.post("/update-customer", async (req, res) => {

  let changedCustomer = req.body.customer;
 let id=req.body.customer._id
  delete changedCustomer["_id"];

 await customer.findOneAndUpdate({_id:id},changedCustomer)

  let dbCustomers = await customer.find({});
  
  res.status(200).json({ customers: { ...dbCustomers } });
});

app.listen(port, () => {
  console.log("port listening");
});
