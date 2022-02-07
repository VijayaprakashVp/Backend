const mongoose = require("mongoose"); 

const userScheme = new mongoose.Schema(
  {
    first_Name: { type: String, required: true },
    middle_Name: { type: String, required: false },
    last_Name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: false , default: "Male" },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = mongoose.model("users", userScheme);

module.exports = User;
