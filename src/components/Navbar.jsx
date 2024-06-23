import React from 'react';
import './Navbar.css'; // Import the CSS 
import api from '../utils/UserApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => {state.cart})
  console.log(cart);

  const handleSignOut = async (e) => {
    e.preventDefault();
    await api.post('logout');
    localStorage.removeItem('username');
    window.location.href = '/signin';
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Shopping App</h1>
      <div className="navbar-options">
        {(window.location.href.includes('/signin') || window.location.href.includes('/signup')) ? (
          ""
        ) : <>
        <a onClick={() => {
          navigate('/')
        }} className="navbar-link">Home</a>
        <a onClick={() => {
          navigate('/cart')
        }} className="navbar-link">Cart {cart}</a>
        <a onClick={handleSignOut} className="navbar-link">Sign Out</a>
      </>}
      </div>
    </nav>
  );
}

export default Navbar;