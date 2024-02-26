const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
require("../models/teacherModel");
const User = mongoose.model("teachers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const teacher = await User.findOne({ email });
    console.log(teacher);
  if (teacher && (await bcrypt.compare(password, teacher.password))) {
    const token = generateToken(teacher._id, teacher.role);

    res.status(200).json({
      _id: teacher._id,
      fullName: teacher.fullName,
      email: teacher.email,
      role: teacher.role,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  login,
};
