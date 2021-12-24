import React from 'react';
import { connect } from 'react-redux'

import { addCartItem } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';


import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItem}) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button inverted onClick={() => addCartItem(item)}>Add To Cart</Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);