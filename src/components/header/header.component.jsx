import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header-container">
    <Link to='/' className="logo-container">
      <h1>GIANNETTI</h1>
    </Link>
    <div className="menu-options">
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        : <Link className='option' to='/signin'>Sign In</Link>
      }
      <Link className='option' to='/about'>About</Link>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);