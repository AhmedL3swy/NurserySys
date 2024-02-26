const asyncHandler = require("express-async-handler");

const authorize = (role) => {
    return asyncHandler(async (req, res, next) => {
        if (req.user.role === role) {
            next();
        } else {
            res.status(401);
            throw new Error(`Not Authorized. Required role: ${role}`);
        }
    });
};

module.exports = authorize;
