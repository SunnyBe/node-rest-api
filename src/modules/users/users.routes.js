const userRoutes = require('express').Router();
const {
  testUsersController,
  loginUserController,
  createNewUserController,
  changeUserEmailController,
  changeUserPasswordController,
} = require('./users.controller');
const isAuthenticated = require('../../middlewares/isAuthenticated');

userRoutes.get('/users', testUsersController);
userRoutes.post('/users/login', loginUserController);
userRoutes.post('/users/new', createNewUserController);
userRoutes.patch('/users/email', isAuthenticated, changeUserEmailController);
userRoutes.patch('/users/password', isAuthenticated, changeUserPasswordController);

module.exports = userRoutes;
