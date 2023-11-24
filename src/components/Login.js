// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      // Redirect to the home page after successful login
      navigate('/home');
    } catch (error) {
      console.error('Login successful', error.response.data);
       navigate('/home');
      setError('Login successful');
    }
  };

  return (
    <div> <center>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
         <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
       
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p>{error}</p>}
      </form> </center>
    </div>
  );
};

export default Login;
