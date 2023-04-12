const express = require('express');
const router = express.Router();
const {login,signup, home} = require ('../controllers/userController');

//user signup
router.post('/signup', signup);
//user loginn
router.post('/login', login);
router.get('/', home)

module.exports= router;