const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./Router/employeeroutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use(cors());
app.use("/", router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
