const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController.js");
const {protect} = require('../middleware/authMiddleware')
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
