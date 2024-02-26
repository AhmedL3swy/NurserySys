const notFound = (req, res, next) => {
    res.status(404).json({
        message: "Error 404 Not Found"
    });
    next();
    }
module.exports = notFound;