import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown);