import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for routing
import './signup.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userExists, setUserExists] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://car-server-backend.onrender.com/api/users?email=${email}`);
    const existingUsers = await res.json();

    if (existingUsers.length > 0) {
      setMessage('User already exists.');
      setUserExists(true);
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      favorites: [],
    };

    const createRes = await fetch('https://car-server-backend.onrender.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    const createdUser = await createRes.json();

    localStorage.setItem('sessionUserId', createdUser.id);
    setMessage('Signup successful!');
    setUserExists(false);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
        {message && <p className="message">{message}</p>}
        {userExists && (
          <button
            type="button"
            className="login-button"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
