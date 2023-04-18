const mongoose = require('mongoose');
const userSchema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const mySchema = new userSchema({
    email:{
        type: String, 
        required:true,
        unique: true
    },
    password: {
        type: String, 
        required:true,
    }
})

// static method that runs whenever a user tries to sign up
mySchema.statics.signup = async function (email, password){
    if (!email || !password){
       throw Error ('Please fill out your details');
    }
    if (!validator.isEmail(email)){
        throw Error ('Not a valid address');
     }
     if (!validator.isStrongPassword(password)){
        throw Error ('weak password try again');
     }

 
 const userExists = await this.findOne({email})

if (userExists){
  throw Error ('A user with the same email exists')
}
//hashing passwords

const salt = await bcrypt.genSalt(13);
const hash = await bcrypt.hash(password, salt);

const user = await this.create({email, password:hash});
return user; // static method returns this new document

}

module.exports= mongoose.model('User', mySchema)