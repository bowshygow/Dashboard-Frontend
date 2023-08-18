import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  // You will need to implement functions to handle authentication and setting user data

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType }}>
      {children}
    </AuthContext.Provider>
  );
};
