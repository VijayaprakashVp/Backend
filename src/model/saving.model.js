const mongoose = require("mongoose"); 

const savingScheme = new mongoose.Schema(
  {
    account_number : {type : Number , required :true , unique :true},
    interestRate : {type : Number , required :true},
    balance : {type : Number , required :true}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Saving = mongoose.model("savings", savingScheme);

module.exports = Saving;
