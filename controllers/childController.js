// #region import Models
const mongoose = require('mongoose');
require('../models/childModel');
const Child = mongoose.model("child");
// #endregion import Models

// #endregion
// #region Get Methods
// Get All Children //
exports.getAllChildren = (req, res,next) => {
  Child.find()
    .then((childDocs) => {
      if (!childDocs) {
        let error = new Error("no childs to show");
        error.statusCode = 404;
        throw error;
      } else {
        res.status(200).json(childDocs);
      }
    })
    .catch((err) => {
      next(err);
    });
}
// Get Child By Id //
exports.getChildById = (req, res,next) => {
   console.log(req.params.id)
    Child.findOne({ _id: req.params.id })
    .then((doc) => {
      if (!doc) {
        let error = new Error("this child doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Post Methods
exports.addNewChild = (req, res,next) => {
  console.log(req.file)
    req.body.image="default.jpg"
    if(req.file){
        req.body.image=req.file.filename
    }
    new Child({
        fullname: req.body.fullname,
        address: { city: req.body.city, street: req.body.street, building: req.body.building },
        age: req.body.age,
        level: req.body.level,
        image: req.body.image,
      })
        .save()
        .then((childDoc) => {
          if (!childDoc) {
            let error = new Error("can't add this child check your data");
            error.statusCode = 404;
            throw error;
          }
          res.status(200).json(childDoc);
        })
        .catch((err) => {
          next(err);
        });
}
// #endregion

// #region Update Methods
exports.updateChild = (req, res,next) => {
    // Removed authentication check
    req.body.image = "default.jpg";
    if (req.file) {
      req.body.image = req.file.filename;
    }
    Child.updateOne({ _id: req.body.id }, req.body)
      .then((doc) => {
        if (doc.matchedCount == 0) {
          let error = new Error(" child id doesn't exist");
          error.statusCode = 404;
          throw error;
        }
        res.status(201).json({ message: "child updated successfully" });
      })
      .catch((err) => {
        next(err);
      });
}
// #endregion

// #region Delete Methods
exports.deleteChild = (req, res,next) => {
    Child.deleteOne({ _id: req.body.id })
    .then((doc) => {
      if (doc.deletedCount == 0) {
        let error = new Error("this child doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: " child is deleted successfully" });
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion
