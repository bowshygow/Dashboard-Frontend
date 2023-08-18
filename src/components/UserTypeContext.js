import React, { createContext, useState, useContext } from 'react';

const UserTypeContext = createContext();

export const useUserType = () => {
  return useContext(UserTypeContext);
};

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState('guest');

  const setUserTypeContext = (newUserType) => {
    setUserType(newUserType);
  };

  return (
    <UserTypeContext.Provider value={{ userType, setUserType: setUserTypeContext }}>
      {children}
    </UserTypeContext.Provider>
  );
};
