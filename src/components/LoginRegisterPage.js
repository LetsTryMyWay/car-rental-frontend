import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const LoginRegisterPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h2>{showLogin ? 'Login' : 'Register'}</h2>
      {showLogin ? <Login /> : <Register />}
      <p>
        {showLogin ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={toggleForm}>
          {showLogin ? 'Register here' : 'Login here'}
        </button>
      </p>
    </div>
  );
};

export default LoginRegisterPage;
