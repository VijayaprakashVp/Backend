const mongoose = require("mongoose"); 

const fixedScheme = new mongoose.Schema(
  {
    account_number : {type : Number , required :true , unique :true},
    interestRate : {type : Number , required :true},
    balance : {type : Number , required :true},
    startDate : {type : Date , required : true},
    maturityDate : {type : Date , required : true}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Fixed = mongoose.model("fixed", fixedScheme);

module.exports = Fixed;
