const express = require('express');
const router = express.Router();
const {login,signup, home} = require ('../controllers/userController.js');

//user signup
router.post('/signup', signup);

//user login
router.post('/login', login);

// user homepage
router.get('/', home);

module.exports= router;