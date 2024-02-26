const mongoose = require("mongoose");
require('../models/classModel');
const ClassModel = mongoose.model("class");

// #region Get Methods
// Mandatory Route
exports.getAllClasses = (req, res,next) => {
    ClassModel.find()
    .then((classDocs) => {
      if (!classDocs) {
        res.status(200).json({ message: "no classes to show" });
      }
      res.status(200).json(classDocs);
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Post Methods
exports.addNewClass = (req, res,next) => {
    new ClassModel({
        name: req.body.name,
        supervisor: req.body.supervisor,
        children: req.body.children,
      })
        .save()
        .then((classDoc) => {
          if (!classDoc) {
            const error = new Error("can't add class check your data");
            error.statusCode = 404;
            throw error;
          }
          res.status(200).json(classDoc);
        })
        .catch((err) => next(err));
}
// #endregion

// #region Update Methods
exports.updateClass = (req, res,next) => {
    let id = req.body.id;
    ClassModel.updateOne({_id:id},req.body)
    .then((classDoc) => {
      if (classDoc.nModified === 0) {
        let error = new Error("this class doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({message:`class ${id} updated successfully`});
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Delete Methods
exports.deleteClass = (req, res,next) => {
    let id= req.body.id;
    ClassModel.deleteOne({ _id: id })
    .then((classDoc) => {
      if (classDoc.deletedCount === 0) {
        let error = new Error("this class doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({message:`class ${id} deleted successfully `});
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Get Class By Id
exports.getClassById = (req, res,next) => {
    let id= req.params.id;
    ClassModel.findOne({ _id: id })
    .then((doc) => {
      if (!doc) {
        let error = new Error("this class doesn't exist");
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

// #region Get Class Supervisors
exports.getClassSupervisors = (req, res,next) => {
    let id= req.params.id;
    ClassModel.findOne({ _id: id }).populate('supervisor')
    .then((doc) => {
      if (!doc) {
        let error = new Error("this class doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(doc.supervisor);
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Get Class Children where /class/child/:id -> Class id
exports.getClassChildren = (req, res,next) => {
    let id= req.params.id;
    ClassModel.findOne({ _id: id }).populate('children')
    .then((doc) => {
      if (!doc) {
        let error = new Error("this class doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(doc.children);
    })
    .catch((err) => {
      next(err);
    });
    
} 
// #endregion