// #region Intailziing Route
const express = require('express');
const loginRoute = express.Router();
// #endregion Intailziing Route

// #region Importing Login Controller
const loginController = require('../controllers/loginController');
// #endregion Importing Login Controller

// #region Routes
loginRoute.post('/login', loginController.login);
// #endregion Routes

// #region Exporting Route
module.exports = loginRoute;
// #endregion Exporting Route