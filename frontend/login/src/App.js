import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from './pages/loginForm';
import SignupForm from './pages/signupForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
       <Routes>
        <Route
          path="/signup"
          element={ <SignupForm/> }
          />
          <Route
          path="/login"
          element={ <LoginForm/> }
          />
       </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
