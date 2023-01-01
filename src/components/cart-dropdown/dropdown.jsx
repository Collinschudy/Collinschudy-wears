import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './dropdown.styles.css';


const DropDown = () => (
    <div className='dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default DropDown;