import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        userName,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      {' '}
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            value={userName}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />

          <button className="registerButton" type="submit">
            {' '}
            Register
          </button>
        </form>
        <Link to="login">
          <button className="registerLoginButton">Login</button>
        </Link>
        {error && <span> Something went Wrong !!</span>}
      </div>
    </div>
  );
};

export default Register;
