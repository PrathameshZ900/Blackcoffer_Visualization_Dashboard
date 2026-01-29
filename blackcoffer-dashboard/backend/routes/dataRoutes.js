const router = require("express").Router();
const Data = require("../models/Data");

router.get("/", async (req, res) => {
  const filters = {};
  Object.keys(req.query).forEach(key => {
    if (req.query[key]) filters[key] = req.query[key];
  });

  const data = await Data.find(filters);
  res.json(data);
});

module.exports = router;
