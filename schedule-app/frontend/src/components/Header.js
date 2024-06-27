import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-outline-secondary" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
