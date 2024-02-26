// #region Loading Vendors Modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config()
// #endregion Loading Vendors Modules

// #region Importing Routes
const loginRoute = require('./routes/loginRoute');
const teacherRoute = require('./routes/teacherRoute');
const childRoute = require('./routes/childRoute');
const classRoute = require('./routes/classRoute');
// #endregion Importing Routes

// #region Importing Middlewares
const notFound = require('./middleware/notFoundMiddleware');
const errorHandler = require('./middleware/errorMiddleware');
const authenticate = require('./middleware/authenticationMW');
// #endregion Importing Middlewares

// #region Importing Swagger Documentation
const docs = require('./docs/last.json');
// #endregion Importing Swagger Documentation

// #region initializing express server
const server= express();
let port = process.env.PORT 
let db = process.env.DB_URL

mongoose
  .connect(db)
  .then(() => {
    console.log("db connected");
    server.listen(port, () => {
      console.log("express is listening");
      console.log(port);
    });
  })
  .catch((err) => {
    console.log("db error" + err.message);
  });

// #endregion initializing express server

// #region Applying Middlewares
// Logging
server.use(morgan('dev'));
// Parsing
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// CORS
server.use(cors());
// Routes
server.use(loginRoute);
server.use(authenticate);
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);
// Swagger
server.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));
// Error Handling
server.use(notFound);
server.use(errorHandler);
// #Endregion Applying Middlewares

