import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform any logout actions here (e.g., clearing user session, tokens, etc.)
    // Then redirect to the login page
    localStorage.removeItem('authToken');
    history.push('/');
    window.location.reload();
  };

  return (
    <Button variant="danger" onClick={handleLogout} className="form-button">
      Logout
    </Button>
  );
};

export default LogoutButton;
