import './App.css';
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home';
import Chat from './pages/chat/Chat';
import NotFound from './pages/notFound/NotFound';

function App() {
  const user = localStorage.getItem("profile")
  
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={user ? <Chat />  : <Home/>} />   
        <Route path="/chat" element={<Chat />} />   
        <Route path="*" element={<NotFound/>} />   
        
      </Routes>
      
    </div>
  );
}

export default App;
