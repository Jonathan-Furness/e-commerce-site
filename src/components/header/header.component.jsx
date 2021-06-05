import React from 'react';

import {ReactComponent as Logo} from '../../assets/png/GIANNETTI-logo-black.svg';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = ({match, history}) => (
  <div className="header-container">
    <Link to='/' className="logo-container">
      <Logo className='logo' />
    </Link>
    <div className="menu-options">
      <Link className='option' to='/about'>About</Link>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
    </div>
  </div>
)

export default Header;