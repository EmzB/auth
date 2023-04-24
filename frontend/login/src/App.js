import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from './pages/loginForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
       <Routes>
        <Route
          path="/"
          element={ <LoginForm/> }
          />
       </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
