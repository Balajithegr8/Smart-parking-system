import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginRegister.css';
import 'boxicons/css/boxicons.min.css'; // Importing boxicons
import CustomToast from './CustomToast';
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('guest');
  const [role, setRole] = useState('user');
  const [transaction, setTransaction] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [toastMessage, setToastMessage] = useState(''); // Message for toast
  const [toastType, setToastType] = useState(''); // Type of toast

  async function registerUser(e) {
    e.preventDefault();
    if (!name || !phoneNumber || !email || !password) {
      setToastMessage('❌ Please fill in all fields.');
      setToastType('error');
      return;
    }

    try {
      const res = await fetch('https://spark-backend-j18q.onrender.com/registeruser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          email,
          password,
        }),
      });

      const data = await res.json();
      setToastMessage(data.message);
      setToastType(data.toastType);

      if (data.toastType === 'success') {
        // Clear form and switch to login
        setname('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setTimeout(() => {
          setIsLogin(true);
        }, 3000);
      }

    } catch (error) {
      setToastMessage('❌ Something went wrong.');
      setToastType('error');
    }
  }

  const LoginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setToastMessage('❌ Please fill in all fields.');
      setToastType('error');
      return;
    }

    try {
      const res = await fetch('https://spark-backend-j18q.onrender.com/loginuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      setToastMessage(data.message);
      setToastType(data.toastType);

      if (data.toastType === 'success') {
        // Clear form and redirect
        setEmail('');
        setPassword('');
        localStorage.setItem("email", email);
        setTimeout(() => navigate('/today'), 3000);
      }

    } catch (error) {
      setToastMessage('❌ Something went wrong.');
      setToastType('error');
    }
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleRegister = () => {
    setIsLogin(false);
  };

  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>SPARK .</p>
        </div>
        <div className={`nav-menu ${isResponsive ? 'responsive' : ''}`} id="navMenu">
          <ul>
            <li><a href="#" className="link active">Home</a></li>
            <li><a href="#" className="link">Blog</a></li>
            <li><a href="#" className="link">Services</a></li>
            <li><a href="#" className="link">About</a></li>
          </ul>
        </div>
        <div className="nav-button">
          <button className={`btn ${isLogin ? 'white-btn' : ''}`} id="loginBtn" onClick={handleLogin}>Sign In</button>
          <button className={`btn ${!isLogin ? 'white-btn' : ''}`} id="registerBtn" onClick={handleRegister}>Sign Up</button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={toggleMenu}></i>
        </div>
      </nav>

      <div className="form-box">
        {isLogin ? (
          <div className={`login-container ${!isLogin ? 'active' : ''}`}>
            <div className="top">
              <span>Don't have an account? <a href="#" onClick={handleRegister}>Sign Up</a></span>
              <header>Login</header>
            </div>
            <div className="input-box">
              <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" className="input-field" placeholder="Email" />

              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" onClick={LoginUser} />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check"> Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Forgot password?</a></label>
              </div>
            </div>
          </div>
        ) : (
          <div className={`register-container`}>
            <div className="top">
              <span>Have an account? <a href="#" onClick={handleLogin}>Login</a></span>
              <header>Sign Up</header>
            </div>
            <div className="two-forms">
              <div className="input-box">
                <input value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text" className="input-field" placeholder="Name" />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text" className="input-field" placeholder="Phone Number" />
                <i className="bx bx-user"></i>
              </div>
            </div>
            <div className="input-box">
              <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Register" onClick={registerUser} />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check"> Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Terms & conditions</a></label>
              </div>
            </div>
          </div>
        )}
      </div>

      <CustomToast toastMessage={toastMessage} toastType={toastType} />
      <ToastContainer />
    </div>
  );
}

export default LoginRegister;
