//signup
const signup = async (req, res)=>{
res.json("you signed up");
}

//login
const login = async (req, res) =>  
{
res.json("hi you're logged in");
}
// dashboard
const home = async(req, res)=>{
    res.json("finally");
}



module.exports= {login, signup, home};