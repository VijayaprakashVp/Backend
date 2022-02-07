const mongoose = require("mongoose"); 

const masterScheme = new mongoose.Schema(
  {
    balance : {type : Number , required :true} 
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Master = mongoose.model("masters", masterScheme);

module.exports = Master;
