// mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Backend?retryWrites=true&w=majority

const mongoose = require("mongoose");
const express = require("express");

const connect = require("./src/config/db");

const userController = require("./src/controllers/users.controller");
const branchController = require("./src/controllers/branch.controller");
const masterController = require("./src/controllers/master.controller");
const savingController = require("./src/controllers/savings.controller");
const fixedController = require("./src/controllers/fixed.controller");

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/branch", branchController);
app.use("/master", masterController);
app.use("/saving", savingController);
app.use("/fixed", fixedController);

app.listen(1234, async () => {
  try {
    await connect();
    console.log("I'm listening to 1234");
  } catch (e) {
    console.log(e.message);
  }
});
