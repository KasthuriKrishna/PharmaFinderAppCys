import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ menuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className='navul'>
        <li onClick={() => navigate('/cus-home')} className='navli'>🏠 Home</li>
        <li onClick={() => navigate('/home')} className='navli'>🔍 Discover</li>
        <li onClick={() => navigate('/list')} className='navli'>📃 Create List</li>
        <li onClick={() => navigate('/diagnosis')} className='navli'>🏥 Diagnosis</li>
        <li onClick={() => navigate('/history')} className='navli'>🛒 Posts</li>
        <li className="navli" onClick={() => navigate('/signout')}>🏃 Sign Out</li>
      </ul>
    </div>
  );
};

export default Navbar;
