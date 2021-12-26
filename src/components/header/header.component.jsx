import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to='/' className="logo-container">
      <h1>GIANNETTI</h1>
    </Link>
    <div className="menu-options">
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        : <Link className='option' to='/signin'>Sign In</Link>
      }
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown /> }
  </div>
)

const mapStateToProps =   createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);