//#region Intializing Route
const express = require('express');
const teacherRoute = express.Router();
//#endregion Intializing Route

//#region Importing Teacher Controller
const teacherController = require('../controllers/teacherController.js');
//#endregion Importing Teacher Controller
//#region Validators
const { teacherPostValidation, teacherUpdateValidation ,validate } = require("../middleware/validationMW")
//#endregion Validators
//#region Importing Other MW
const uploadImg=require('../middleware/uploadImageMW');
const authorize = require('../middleware/authorizationMW');
//#endregion Importing Other MW

//#region Routes
// Mandatory Route
teacherRoute.route('/teachers')
            .get(authorize('admin'),teacherController.getAllTeachers)
            .post(authorize('admin,teacher'),uploadImg("/uploads/teachers"),teacherPostValidation,validate,teacherController.addNewTeacher)
            .put(authorize('admin,teacher'),uploadImg("/uploads/children"),teacherUpdateValidation,validate,teacherController.updateTeacher)
            .delete(authorize('admin,teacher'),teacherController.deleteTeacher)
// Extra Routes
teacherRoute.get('/teachers/supervisors', teacherController.getAllSupervisors);

teacherRoute.get('/teachers/:id',teacherController.getTeacherById);
//#endregion Routes

//#region Exporting Route
module.exports = teacherRoute;
//#endregion Exporting Route
