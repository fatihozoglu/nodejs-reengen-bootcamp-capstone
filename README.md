# NodeJs/ExpressJs Electrica App - Reengen Full Stack Web Development Bootcamp Capstone Project

This is the Backend part of the Full Stack Capstone Project for Reengen Full Stack Web Development Bootcamp with VueJs and NodeJs.

You can see the [live demo here.](https://fozoglu-reengen-capstone-app.surge.sh/)

This project is built with:

- Javascript Runtime Environment: [NodeJs](https://nodejs.org/en/)
- Web Framework for NodeJs: [ExpressJs](https://expressjs.com/)
- Authentication and authorization: [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- Password hashing: [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- Validations: [Express Validator](https://express-validator.github.io/docs/)
- Databases:
  - [Mongodb](https://www.mongodb.com/)
  - [PostgreSQL](https://www.postgresql.org/)
- NodeJs ORM for Mongodb: [MongooseJs](https://mongoosejs.com/)
- For interacting with PostgreSQL: [Node Postgres](https://node-postgres.com/)
- Deployment: [Heroku](https://www.heroku.com/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Project Setup](#project-setup)

## Overview

This is an energy management app for listing different factories and their related units' energy consumption amounts, price, discount status and total price. It is authenticated with JWT (JSON Web Token) so you should register to be able to view the data.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Register via Register page (/register) by entering username, email, password and user role (user and admin)
- Login via Login page (/login)
- Select "Remember Me" option in login page to keep logged in
- Receive form validations while registering and logging in
- View factory data in Dashboard when logged in
- View username and email information in the user modal residing on the header
- Navigate to user settings page when clicked to the settings button in user modal
- View related units' data when clicked on a factory
- Add, edit and delete factory/unit data if registered as an "ADMIN" user
- Add and delete factory/unit columns if registered as an "ADMIN" user
- Buttons for adding/editing/deleting rows and columns will only be visible for "ADMIN" users

### Links

- Solution URL: [Github Link](https://github.com/fatihozoglu/vue-reengen-bootcamp-capstone)
- Live Site URL: [Reengen Bootcamp Capstone Project](https://fozoglu-reengen-capstone-app.surge.sh/)

## My process

### Built with

- [NodeJs](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/)
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Express Validator](https://express-validator.github.io/docs/)
- [Mongodb](https://www.mongodb.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongooseJs](https://mongoosejs.com/)
- [Node Postgres](https://node-postgres.com/)

## Author

- Portfolio - [Fatih Özoğlu](https://fatihozoglu.github.io/react-portfolio/)
- Linkedin - [Fatih Özoğlu](https://www.linkedin.com/in/fatihozoglu/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
