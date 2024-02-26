// #region Intializing Route
const express = require('express');
const classRoute = express.Router();
// #endregion Intializing Route

// #region Importing Class Controller
const classController = require('../controllers/classController');
// #endregion Importing Class Controller

// # region Validators
const { classPostValidation, classUpdateValidation ,validate } = require("../middleware/validationMW")
// #endregion Validators
// #region Importing Other MW
const authorize = require('../middleware/authorizationMW');
// #endregion Importing Other MW
// #region Routes

// Mandatory Route

classRoute.route('/class')
            .all(authorize('admin'))
            .get(classController.getAllClasses)
            .post(classPostValidation,validate,classController.addNewClass)
            .put(classUpdateValidation,validate,classController.updateClass)
            .delete(classController.deleteClass)

// Class By Id Route
classRoute.get('/class/:id', classController.getClassById);
// Class Supervisors Route
classRoute.get('/class/teacher/:id', classController.getClassSupervisors);
// Class Children Route
classRoute.get('/class/child/:id', classController.getClassChildren);

// #endregion Routes

// #region Exporting Route
module.exports = classRoute;
// #endregion Exporting Route
