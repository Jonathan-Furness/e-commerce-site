import React from 'react';

import CustomButton from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Checkout</CustomButton>
  </div>
)

export default CartDropdown;