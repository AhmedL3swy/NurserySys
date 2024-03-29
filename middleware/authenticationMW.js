const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
require("../models/teacherModel");
const User = mongoose.model("teachers");

const authenticate = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");

            next();

        } 
        catch (error) {
            res.status(401);
            throw new Error("Not Authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not Authorized - No token");
    }
});

module.exports = authenticate;
