const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("../models/teacherModel");
const User = mongoose.model("teachers");

const initializeAdminAccount = async () => {
  try {
    // Check if admin account already exists
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (!adminExists) {
      // Create admin account
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      const admin = new User({
        fullname: process.env.ADMIN_FULLNAME,
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "admin",
      });

      await admin.save();

      console.log("Admin account created successfully!");
    } else {
      console.log("Admin account already exists.");
    }
  } catch (error) {
    console.error("Error initializing admin account:", error.message);
  }
};

initializeAdminAccount();