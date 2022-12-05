import './App.css';
import { Route, Routes } from 'react-router-dom'
import Register from './componnents/Register';
import Login from './componnents/Login';
import Messages from './componnents/Messages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Messages/>} />
        <Route path='messenger/login' element={<Login/>} />
        <Route path='messenger/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
