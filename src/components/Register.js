// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please enter your name, email, and password.');
      return;
    }
 
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });

      console.log('Registration successful:', response.data);

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div><center>
      <h2>Register</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
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
        <button type="button" onClick={handleRegister}>
          Register
        </button> 
        {error && <p>{error}</p>}
      </form> </center>
    </div>
  );
};

export default Register;
