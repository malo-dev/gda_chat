import './App.css';
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <div className="App">
       <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />   
         <Route path="/chat" element ={<Chat/>}/>   
      </Routes>
      
    </div>
  );
}

export default App;
