// #region Intailziing Route
const express = require('express');
const childRoute = express.Router();
// #endregion Intailziing Route

// #region Importing Child Controller
const childController = require('../controllers/childController');
// #endregion Importing Child Controller
// #region Validators
const { childPostValidation, childUpdateValidation ,validate } = require("../middleware/validationMW")
// #endregion Validators
//#region Importing Other MW
const uploadImg=require('../middleware/uploadImageMW');
const authorize = require('../middleware/authorizationMW');
//#endregion Importing Other MW

// #region Routes

// Mandatory Route
childRoute.route('/child')
            .all(authorize('admin'))
            .get(childController.getAllChildren)
            .post(uploadImg("/uploads/children"),childPostValidation,validate,childController.addNewChild)
            .put(uploadImg("/uploads/children"),childUpdateValidation,validate,childController.updateChild)
            .delete(childController.deleteChild)
// Query Route
childRoute.get('/child/:id', childController.getChildById);

// #endregion Routes

// #region Exporting Route
module.exports = childRoute;
// #endregion Exporting Route
