import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
       <Routes>
       <Route
          path="/"
          element={ <Dashboard/> }
          />
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
