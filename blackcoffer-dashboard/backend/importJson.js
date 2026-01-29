const mongoose = require("mongoose");
const fs = require("fs");
const Data = require("./models/Data");

mongoose.connect("mongodb://127.0.0.1:27017/blackcoffer");

const raw = fs.readFileSync("jsondata.json");
const jsonData = JSON.parse(raw);

async function importData() {
  try {
    await Data.deleteMany(); // clear old data
    await Data.insertMany(jsonData);
    console.log("JSON data imported successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

importData();
