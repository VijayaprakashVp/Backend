const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Backend?retryWrites=true&w=majority",
  );
};

module.exports = connect;