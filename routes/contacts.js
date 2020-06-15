const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/contacts
// @desc    Add new contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   GET api/contacts/:id
// @desc    Update contacts
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   GET api/contacts/:id
// @desc    Delete contact
// @access  Private
router.get("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
