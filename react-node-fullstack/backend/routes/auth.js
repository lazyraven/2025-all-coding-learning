const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();
const SECRET = "supersecretkey";

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashed });

  res.json(user);
});

// login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findone({ username });
  if (!user) return res.status(401).json({ error: "Invalid user" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Wrong Password" });

  const token = jwt.sign({ id: user._id, username }, SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });
});
module.exports = router;
