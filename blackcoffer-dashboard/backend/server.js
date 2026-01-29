const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/blackcoffer");

app.use("/api/data", require("./routes/dataRoutes"));

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
