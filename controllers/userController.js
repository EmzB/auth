const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const userToken= (_id) => {
return jwt.sign({_id}, process.env.SECRET, {expiresIn:'3d'});
}

//signup
const signup = async(req, res)=>{
const {email, password}= req.body;

try{
 const user = await User.signup(email, password);
 const token = userToken(user._id);

 res.status(200).json(`${email} ${token} successfuly signed up`);
 console.log(token);
}

catch (error){
 res.status(400).json(error.message); // object returned yeah so get the message property.
}}

//login
const login = async (req, res) =>  {

const {email, password} = req.body;
try{
    const user = await User.login(email, password);
    const token = userToken(user._id);
   
    res.json({ status: 200, message: `${email} ${token} successfully logged in` });
        }  
    catch (error) {
   res.json({ status: 400, message: error.message });
        }}
// dashboard
const home = async(req, res)=>{
    res.json("finally");
}



module.exports= {login, signup, home};