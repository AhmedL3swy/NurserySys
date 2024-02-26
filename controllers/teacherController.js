const mongoose = require("mongoose");
const multer = require("multer");
const bcrypt = require("bcrypt");
require('../models/teacherModel');
require('../models/classModel');
const TeacherModel = mongoose.model("teachers");
const ClassModel = mongoose.model("class");
// # region Multer Configuration

  exports.upload = multer({
    dest: "uploads/"
  });
// #endregion Multer Configuration  

// #region Post Methods
exports.addNewTeacher = (req, res,next) => {

  req.body.image="default.png";
  if(req.file){
    req.body.image = req.file.originalname;
  }
  const hash = bcrypt.hashSync(req.body.password, 10);
  new TeacherModel({
    fullname: req.body.fullname,
    password: hash,
    email: req.body.email,
    image: req.body.image ,
  })
    .save()
    .then((teacherDoc) => {
      if (!teacherDoc) {
        const error = new Error("can't add teacher check your data");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(teacherDoc);
    })
    .catch((err) => next(err));
}
// #endregion


// #region Get Methods
exports.getAllTeachers = (req, res,next) => {
    TeacherModel.find({role:"teacher"})
    .then((teacherDocs) => {
      if (!teacherDocs) {
        res.status(200).json({ message: "no teachers to show" });
      }
      res.status(200).json(teacherDocs);
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Update Methods
exports.updateTeacher = (req, res,next) => {
    let id = req.body.id;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    req.body.image="default.png";
    if(req.file){
      req.body.image = req.file.originalname;
    }
    TeacherModel.updateOne({_id:id},req.body)
    .then((teacherDoc) => {
      if (teacherDoc.matchedCount === 0) {
        let error = new Error("this teacher doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(teacherDoc);
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion


// #region Delete Methods
exports.deleteTeacher = (req, res,next) => {
    let id = req.body.id;
    TeacherModel.deleteOne({_id: id })
    .then((teacherDoc) => {
      if (teacherDoc.deletedCount === 0) {
        let error = new Error("this teacher doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "teacher deleted successfully" });
    })
    .catch((err) => {
      next(err);
    });
}
// #endregion

// #region Get Teacher By Id
exports.getTeacherById = (req, res,next) => {
    let id = req.params.id;
    TeacherModel.findOne({_id:id})
    .then((teacherDoc) => {
      if (!teacherDoc) {
        let error = new Error("this teacher doesn't exist");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(teacherDoc);
    })
    .catch((err) => {
      next(err);
    });


}
// #endregion

// #region Get All Supervisors
exports.getAllSupervisors = (req, res, next) => {
  ClassModel.find({})
    .populate('supervisor') // Assuming 'supervisor' is a reference field in your ClassModel
    .then((classes) => {
      if (!classes || classes.length === 0) {
        let error = new Error("No classes found");
        error.statusCode = 404;
        throw error;
      }
      // Extracting unique supervisors from all classes
      const supervisors = [...new Set(classes.map((classDoc) => classDoc.supervisor))];

      res.status(200).json({ supervisors });
    })
    .catch((err) => {
      next(err);
    });
};
// #endregion

