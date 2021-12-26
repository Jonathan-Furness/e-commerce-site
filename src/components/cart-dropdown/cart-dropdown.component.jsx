import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../button/button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
        <span className='empty-message'>Your Cart is Empty</span>
      }
    </div>
    <Link to='/checkout' onClick={() => dispatch(toggleCartHidden())}>
      <CustomButton>Checkout</CustomButton>
    </Link>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);