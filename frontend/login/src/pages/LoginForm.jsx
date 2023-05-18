import {useState} from 'react';

const LoginForm= () => {
  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');
  

return (
    <form>
    <label>Email:</label>
    <input
    type="email"
    onChange={(e)=> setEmail(e.target.value) }
    value = {email}
    />

<label>Password:</label>
    <input
    type="password"
    onChange={(e)=> setPassword(e.target.value) }
    value = {password}
    />

<button>Log In</button>
    </form>
)}

export default LoginForm;