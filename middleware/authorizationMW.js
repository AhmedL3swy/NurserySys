const asyncHandler = require("express-async-handler");

const authorize = (roles) => {
    return asyncHandler(async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(401);
            throw new Error(`Not Authorized. Required roles: ${roles}`);
        }
        next();
    });
};

module.exports = authorize;
