import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://car-server-backend.onrender.com/api/users?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        setMessage('User not found. Please sign up.');
        return;
      }

      const user = users[0];

      if (user.password !== password) {
        setMessage('Incorrect password.');
        return;
      }

      login(user); // ✅ store in context and localStorage
      setMessage('Login successful!');
      navigate('/display');
    } catch (err) {
      console.error('Login error:', err);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default SignIn;
