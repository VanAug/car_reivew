/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('sessionUserId');
    if (userId) {
      fetch(`https://car-server-backend.onrender.com/api/users/${userId}`)
        .then(res => res.json())
        .then(setUser)
        .catch(() => setUser(null));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('sessionUserId', userData.id);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('sessionUserId');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
