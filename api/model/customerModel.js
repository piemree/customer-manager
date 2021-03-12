const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  adress: String,
  city: String,
});

const customer=mongoose.model("customerSchema",customerSchema)

module.exports=customer
