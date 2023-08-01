import React, { useHistory } from 'react-router-dom';

const RegisterButton = () => {
  const history = useHistory();

  const handleRegisterClick = () => {
    // Reload the page when the "Register" button is clicked
    history.push('/register');
    window.location.reload();
  };

  return (
    <button className="btn btn-primary" onClick={handleRegisterClick}>
      Register
    </button>
  );
};

export default RegisterButton;
