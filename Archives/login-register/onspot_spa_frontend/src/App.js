import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Test from './components/Test/Test';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { useState } from 'react';



function App() {
  const [user,setLoginUser]= useState({})
  return (
    <div>
    <Router>
     <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/dashboard" element={user?._id ? <Test /> : <Login setLoginUser={setLoginUser}/> } />
     </Routes>
    </Router>
    </div>
  );
}

export default App;

