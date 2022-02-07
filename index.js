// mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Backend?retryWrites=true&w=majority

const mongoose = require("mongoose"); 
const express = require("express"); 
const userController = require("./src/controllers/users.controller");
const connect = require("./src/config/db");

const app = express();

app.use(express.json()); 

app.use("/user" , userController);


app.listen(1234 , async () => {
    try {
        await connect();
        console.log("I'm listening to 1234");
    } catch (e) {
        console.log(e.message);
    }
});

