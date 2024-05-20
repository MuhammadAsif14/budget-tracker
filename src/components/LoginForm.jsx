// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    sessionStorage.setItem('user', username);
    onLogin(username);
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
