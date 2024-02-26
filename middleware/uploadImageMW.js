const multer = require("multer")

const uploadImg =(folderName)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./${folderName}`);
        },
        filename: function (req, file, cb) {
            cb(null,  file.originalname );
        },
    });
    return multer({ storage: storage }).single("image");
}

module.exports = uploadImg;