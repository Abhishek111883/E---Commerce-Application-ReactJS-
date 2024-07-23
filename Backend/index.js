const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./Router/employeeroutes");

dotenv.config();

const app = express();

app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://honest-harbour-e-commerce.netlify.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["PUT", "POST", "DELETE", "GET"],
};

app.use(cors(corsOptions));
app.use("/", router);

// Connect to MongoDB
mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log("Server is running on port" + " " + port);
});
