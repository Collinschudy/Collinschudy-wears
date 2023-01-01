import React from 'react';
import './cart-icon.styles.css';
import { connect } from 'react-redux';
import { toggleCartView } from '../../redux/cart/cart.actions'

import { BsCart } from 'react-icons/bs';

const CartIcon = ({ toggleCartView }) => {
    return (
        <div className='cart-wrapper' onClick={toggleCartView}>
            <BsCart className='cart-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
});

export default connect(null, mapDispatchToProps)(CartIcon);

