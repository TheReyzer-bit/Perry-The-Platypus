import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h1 className="h5 mb-0">Расписание</h1>
      <div>
        <button className="btn btn-secondary me-2" onClick={() => window.location.href='/login'}>Сменить пользователя</button>
        <button className="btn btn-danger" onClick={onLogout}>Выйти</button>
      </div>
    </header>
  );
};

export default Header;
