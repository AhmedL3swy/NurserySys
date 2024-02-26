
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  

  <h3 align="center">Nursery System Restful API</h3>

  <p align="center">
    Restful API for managing nursery-related data implemented using Node.js, Express, and MongoDB.
    <br />
    <a href="https://github.com/AhmedL3swy/NurserySys"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/AhmedL3swy/NurserySys/issues">Report Bug</a>
    ·
    <a href="https://github.com/AhmedL3swy/NurserySys/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project is a Restful API for managing nursery-related data, implemented using Node.js, Express, and MongoDB. It provides endpoints for CRUD operations on nursery-related entities and includes features for authentication using JWT.

### Features
- **MongoDB Integration**: Utilizes MongoDB as the database to store and retrieve nursery-related data.
- **Authentication**: Implements JWT-based authentication to secure the API endpoints.
- **Express Framework**: Built with Express, a fast, unopinionated, minimalist web framework for Node.js.
- **Swagger Documentation**: Uses Swagger for API documentation, making it easy for developers to understand and use the API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple example steps.

### Installation

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
* Clone the repo
  ```sh
  git clone https://github.com/AhmedL3swy/NurserySys.git
  ```
* Install dependencies
  ```sh
  npm install
  ```
* Set up environment variables (create a `.env` file)
  ```env
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```
* Start the server
  ```sh
  npm start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<p align="center">
<a href="mailto:ahmed.a.alesawy@gmail.com">
  <img src="https://img.shields.io/badge/-Your.Name-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
</a> </p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Alec016 - Mongoose Autoincrement](https://www.npmjs.com/package/@alec016/mongoose-autoincrement) - A helpful package for auto-incrementing fields in Mongoose.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - A library for hashing passwords to enhance security.
* [cors](https://www.npmjs.com/package/cors) - A middleware for handling Cross-Origin Resource Sharing (CORS) in Express applications.
* [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module for loading environment variables from a .env file into process.env.
* [express](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js used for building the API.
* [express-async-handler](https://www.npmjs.com/package/express-async-handler) - A utility to handle asynchronous exceptions in Express route handlers.
* [express-validator](https://www.npmjs.com/package/express-validator) - A set of Express.js middlewares to validate request data.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - A library for creating and verifying JSON Web Tokens (JWT) for authentication.
* [mongoose](https://mongoosejs.com/) - A MongoDB object modeling tool designed to work in an asynchronous environment.
* [morgan](https://www.npmjs.com/package/morgan) - A HTTP request logger middleware for Express.
* [multer](https://www.npmjs.com/package/multer) - A middleware for handling `multipart/form-data`, used for file uploads.
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Middleware to serve Swagger UI for API documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- Shields -->
[contributors-shield]: https://img.shields.io/github/contributors/AhmedL3swy/NurserySys.svg?style=for-the-badge
[contributors-url]: https://github.com/AhmedL3swy/NurserySys/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AhmedL3swy/NurserySys.svg?style=for-the-badge
[forks-url]: https://github.com/AhmedL3swy/NurserySys/network/members
[stars-shield]: https://img.shields.io/github/stars/AhmedL3swy/NurserySys.svg?style=for-the-badge
[stars-url]: https://github.com/AhmedL3swy/NurserySys/stargazers
[issues-shield]: https://img.shields.io/github/issues/AhmedL3swy/NurserySys.svg?style=for-the-badge
[issues-url]: https://github.com/AhmedL3swy/NurserySys/issues



