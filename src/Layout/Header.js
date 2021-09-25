
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IconContext } from "react-icons";


function Header() {
  return (
    <header style={headerStyle}>
      <h1 class="text-success">Bake N' Flake CakeStore <HiOutlineUserCircle  style={iconStyle} /></h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About us</Link> |
      <Link style={linkStyle} to="/contact"> Contact us</Link> | <Link style={linkStyle} to="/cakes">Cakes</Link> | <Link style={linkStyle} to="/orders">Orders</Link> |
      <Link style={linkStyle} to="/login"> Login</Link> | <Link style={linkStyle} to="/register">Register</Link> |
      <Link style={linkStyle} to="/button">Button</Link> | <Link style={linkStyle} to="/crud">CRUD</Link> |
      <Link style={linkStyle} to="/hello">Hello</Link> | <Link style={linkStyle} to="/cart">MyShoppingCart</Link> |
      <Link style={linkStyle} to="/customers">Customers</Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',

  
}

const iconStyle = {
 
    float: 'right'
  
}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  
}

export default Header;