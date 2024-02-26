// #region Loading Vendors Modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();
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
const docs = require('./docs/docs.json');
// #endregion Importing Swagger Documentation

// #region initializing express server
const server = express();
let port = process.env.PORT;

// Use mongoose-memory-server for testing or development
let mongooseServer;

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') {
  mongooseServer = new MongoMemoryServer();
  mongooseServer.start().then(() => {
    const mongoUri = mongooseServer.getUri();
    mongoose
      .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('In-memory MongoDB connected');
        startServer();
      });
  });
} else {
  // For production or other environments, use the provided DB_URL from the environment variables
  mongoose
    .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected');
      startServer();
    })
    .catch((err) => {
      console.log('db error' + err.message);
    });
}

function startServer() {
  server.listen(port, () => {
    console.log('Express is listening');
    console.log(port);
    // Initialize admin
    require('./middleware/intializeMW');
  });
}
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
server.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
server.use(loginRoute);
server.use(authenticate);
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);

// Error Handling
server.use(notFound);
server.use(errorHandler);
// #Endregion Applying Middlewares
