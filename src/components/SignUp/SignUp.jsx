import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook to access login
import './signup.css';

const SignUp = () => {
  const { login } = useAuth(); // Access the login function from context
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userExists, setUserExists] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if user already exists
    const res = await fetch(`https://car-server-backend.onrender.com/api/users?email=${email}`);
    const existingUsers = await res.json();

    if (existingUsers.length > 0) {
      setMessage('User already exists.');
      setUserExists(true);
      return;
    }

    // Create new user
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

    // Log the user in by calling the context's login function
    login(createdUser); // This will set the user globally

    // Set success message and clear form fields
    setMessage('Signup successful!');
    setUserExists(false);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    // Navigate to the display page after successful signup
    navigate('/display');
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
            onClick={() => navigate('/signin')}
          >
            Go to Login
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
