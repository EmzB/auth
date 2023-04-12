const express = require('express');
const router = express.Router();
const {login,signup}= require ('../controllers/userController');

//user signup
router.post('/signup', signup);
//user login
router.post('/login', login);


module.exports= router;