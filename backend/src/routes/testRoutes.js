const express = require("express");
const TestModel = require("../models/testModel");

const router = express.Router();

// Get all tests
router.get("/", async (req, res) => {
  try {
    const tests = await TestModel.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one test
router.get("/:id", getTest, (req, res) => {
  res.json(res.test);
});

// Create a test
router.post("/", async (req, res) => {
  const test = new TestModel({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newTest = await test.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a test
router.patch("/:id", getTest, async (req, res) => {
  if (req.body.name != null) {
    res.test.name = req.body.name;
  }
  if (req.body.description != null) {
    res.test.description = req.body.description;
  }

  try {
    const updatedTest = await res.test.save();
    res.json(updatedTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a test
router.delete("/:id", getTest, async (req, res) => {
  try {
    await res.test.remove();
    res.json({ message: "Deleted Test" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTest(req, res, next) {
  let test;
  try {
    test = await TestModel.findById(req.params.id);
    if (test == null) {
      return res.status(404).json({ message: "Cannot find test" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.test = test;
  next();
}

module.exports = router;
